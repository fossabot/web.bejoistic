---
title: Be Careful What You Request For
subtitle: "Did you know that the HTTP verb in a request can be arbitrary?"
description: "Did you know that the HTTP verb in a request can be arbitrary?"
slug: be-careful-what-you-request-for-django-method
date: 2020-06-27
tags: ["article", "security"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

### HTTP Verbs

Did you know that the HTTP verb in a request can be arbitrary? GET, POST, and their compatriots are so commonplace it's easy to think those are the only verbs. However, the HTTP/1.1 specification in RFC2616 states there is support for custom verbs. [Section 9](https://tools.ietf.org/html/rfc2616#section-9) reads:

> Although this set can be expanded, additional methods cannot be assumed to share the same semantics for separately extended clients and servers.

This means the HTTP verb can be manipulated, and, if you're not careful, might be an exploitation vector in your application.

### OOPS HTTP/1.1

While scanning for cross-site scripting (XSS) in Django apps, I came across an app that handled GET and POST requests by checking `request.method` or otherwise returning `HttpResponseBadRequest` containing a message: `"Method not supported: {}".format(request.method)"`. That seems like a perfectly reasonable thing to do, right? I came really close to calling this a false positive and moving on. I assumed `request.method` was a well-defined set. As it turns out, `request.method` can be much more, and this is actually an XSS vulnerability.

If we start up a Django app with a view like this, we can start throwing crafted HTTP requests at it using netcat.

```python
@csrf_exempt # Do this for demonstration purposes.
def vote(request, question_id):
    if request.method != "GET" and request.method != "POST":
        return HttpResponseBadRequest(
            "This view can not handle method {0}\n".format(request.method), status=405
        )
    ...
```

![Django App](/static/img/posts/articles/django-methods-arbitrary-http-verbs.gif)

The protocol parser for HTTP recognizes the first sequence of characters prior to a space as the HTTP verb. This means our payload cannot contain spaces. Further, request.method transforms all text to uppercase. This rules out most JavaScript; the tried-and-true `<script>alert(1)</script>` becomes `<SCRIPT>ALERT(1)</SCRIPT>`, and `ALERT(...)` is not a valid function. Our payload therefore is subject to the following restrictions:

1. The payload cannot contain spaces.
2. The payload must be understood by the browser when transformed to uppercase.

I found [this GitHub page](https://github.com/s0md3v/AwesomeXSS#awesome-payloads) where a friendly neighborhood hacker left behind some slick payloads. The first payload in the list, ` <A/hREf="j%0aavas%09cript%0a:%09con%0afirm%0d``">z `, indicates that browsers will "fix" the slash. Since I also knew an inline script would be difficult due to capitalization, I decided to go with a social engineering trick:

```html
<A/HREF="HTTPS://GOOGLE.COM">BACK</A>
```

![Gog View](/static/img/posts/articles/django-methods-error-page-with-exploit.png)

I'm sure there are other clever payloads that could successfully exploit under these conditions, but I was satisfied with this result!

Now, is this really dangerous? ...Well, it depends. An attacker would have to use XMLHttpRequests or the Fetch API to pull this off in a browser, and browsers are pretty good about forbidding weird characters in HTTP verbs. However, that doesn't mean it's impossible to exploit--there are some really clever hackers out there--so it's better not to reflect `request.method`.

![Dev View](/static/img/posts/articles/django-methods-chrome-rejects-http-verbs.png)

You can scan your code for this pattern using Semgrep using a set of rules we wrote to detect this and many other security problems in Django.

```bash
$ semgrep --config=https://semgrep.live/c/r/python.django.security.injection
scanning code...
polls/views.py
WARNING rule:python.django.security.injection.reflected-data-httpresponsebadrequest.reflected-data-httpresponsebadrequest: Found request data reflected into HttpResponseBadRequest. This could be vulnerable to XSS. Ensure the request data is properly escaped or sanitzed.
38:        return HttpResponseBadRequest(
39:            "This view can not handle method {0}\n".format(request.method), status=405
```

In fact, the rule for this is relatively easy to write in just a few lines. Semgrep makes it easy to write simple rules for detecting complex patterns. You can check out this rule in action at [semgrep.live](https://semgrep.live/oq09).

```yaml
- pattern-either:
    - pattern: django.http.HttpResponseBadRequest(..., <... request.$W ...>, ...)
    - pattern: |
        $DATA = request.$W
        ...
        django.http.HttpResponseBadRequest(..., <... $DATA ...>, ...)
```

Check out more of our Semgrep rules at [semgrep.live](https://semgrep.live/r/), or [consider contributing your own](https://github.com/returntocorp/semgrep-rules)!
