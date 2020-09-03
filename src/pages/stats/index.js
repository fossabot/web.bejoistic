import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import RichText from "components/rich-text";
import Box from "components/box";
import Logo from "svg/logo.svg";

import "./style.css";

const text = `
This website uses [**Simple Analytics**](https://simpleanalytics.com/?ref=bejoistic.com) to tally pageviews without tracking you.

Cookies and fingerprinting are never used and your IP address is hidden behind when your ping is anonymously proxied to Simple Analytics' API on your behalf. Refer to the [**Privacy Policy**](/privacy/) for a complete list of information sent.

In that case, why not share them? 😊 Pageviews for the past month are graphed below and more information (top pages, referrers, etc.) can be found [on a publicly-accessible dashboard.](https://simpleanalytics.com/bejoistic.com?utm_source=bejoistic.com&utm_content=badge)

[![Powered by Simple Analytics](https://simpleanalyticsbadge.com/bejoistic.com?mode=dark)](https://simpleanalytics.com/bejoistic.com?utm_source=bejoistic.com&amp;utm_content=badge)
`;

const disclaimer = `
_Public visitor stats for this website_
`;

const Stats = () => {
  return (
    <Layout className="stats-page">
      <SEO title="Home" />
      <div className="wrapper">
        <Box className="home-box">
          <h1>Analytics</h1>
          <Logo className="logo -hide-screen" />
        </Box>
        <RichText text={text} />
        <RichText className="disclaimer -hide-screen" text={disclaimer} />
      </div>
    </Layout>
  );
};

export default Stats;
