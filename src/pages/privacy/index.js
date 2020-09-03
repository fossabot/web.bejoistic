import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import RichText from "components/rich-text";
import Box from "components/box";
import Logo from "svg/logo.svg";

import "./style.css";

const text = `
> No wesellyourdata.com. When you visit this website, I don’t track you (maybe)

Okay, this is an easy one. 😉

Your privacy is more important to me than metrics. The internet needs to know less about us, not more. Just because it’s possible to track someone doesn’t mean we should.

# Analytics

This website uses [**Simple Analytics**](https://simpleanalytics.com/?ref=bejoistic.com) to count pageviews **without collecting any personally identifiable information,** such as IP addresses, cookies, and browser fingerprints. Only the [following information](https://docs.simpleanalytics.com/what-we-collect?ref=bejoistic.com) is collected and recorded by them:

- URL visited
- Timestamp of visit
- Referrer URL (hostname and path)
- Language
- User agent (browser name and version)
- Screen and window sizes
- Duration of visit

**📈 Stats for this site are public! [View them here.](/stats/)**

For questions or complaints about your data and the protection of your privacy you can contact me (Ahmad Ainul Rizki) at hey@bejoistic.com

### Content
The content on this site is all available for free. I write, edit and produce everything you see here. You can use this site’s free and open resources without giving me any of your personal information.

# Data

This site doesn't have a database (so no accounts either). This website is hosted on Vercel and creates [logs][logs] to monitor this website but also collects some [Personally Identifiable Information (PII)][dpa]. This happens on almost every web page you visit; logs include the IP addresses, stored for less than 30 days. 

## Forms
I only collect and process data that you actively provide to me. Currently that is [Pageclip][forms] to parse form submissions on this site. They are send to Pageclip Forms and then send to my personal e-mail which is hosted on [Soverin][soverin].

### Embedded content
Pages on this site may include embedded content (e.g. videos, images). These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content. You can use facebook container, uBlock origin and/or DuckDuckGo privacy essentials to automatically block these third-party requests. 

# Services

These are all the services that are in any way associatied to this website, you can read there privacy policies.

* **[GitHub Privacy Policy][github]**
* **[Soverin Privacy Policy][soverinp]**
* **[Buttondown Privacy Policy][buttondown]**
* **[Vercel Privacy Policy][vercel]**
* **[Youtube Privacy Policy][youtube]**

[dpa]: https://vercel.com/legal/dpa
[forms]: https://pageclip.co/
[logs]: https://vercel.com/blog/refined-logging
[soverin]: https://soverin.net/
[soverinp]: https://soverin.net/legal
[github]: https://help.github.com/en/github/site-policy/github-privacy-statement
[buttondown]: https://buttondown.email/privacy
[vercel]: https://vercel.com/legal/privacy-policy
[youtube]: https://www.youtube.com/about/policies/#community-guidelines
`;

const disclaimer = `
_No wesellyourdata.com. When you visit this website, I don’t track you_
`;

const Privacy = () => {
  return (
    <Layout className="priv-page">
      <SEO title="Home" />
      <div className="wrapper">
        <Box className="home-box">
          <h1>Privacy Policy</h1>
          <Logo className="logo -hide-screen" />
        </Box>
        <RichText text={text} />
        <RichText className="disclaimer -hide-screen" text={disclaimer} />
      </div>
    </Layout>
  );
};

export default Privacy;
