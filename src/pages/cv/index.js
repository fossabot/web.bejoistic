import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import RichText from "components/rich-text";
import Box from "components/box";
import Logo from "svg/logo.svg";

import "./style.css";

const text = `
## Info & Contact

- [hey@bejoistic.com](mailto:hey@bejoistic.com)
- [github.com/bejoistic](https://github.com/bejoistic)
- [gitlab.com/bejoistic](https://gitlab.com/bejoistic)
- [@bejoistic](https://twitter.com/@bejoistic)
- Nationality: Asian/Indonesian
- Bahasa Indonesia: Native speaker.
- English: Intermediate.

## Coming Soon

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt leo nec nunc tincidunt faucibus. Vestibulum hendrerit erat at augue ultricies, ut ultrices diam pharetra. Ut quis magna massa. Aenean aliquet efficitur congue. Quisque sagittis dolor nec felis porttitor, vel ultrices dui tempor. Nulla maximus sem nec sapien sagittis, ut iaculis elit rhoncus. Sed at lacus risus. Maecenas aliquam elit mi, eu pulvinar risus blandit in. Morbi feugiat dui dui, sed cursus dolor vulputate sed. Suspendisse potenti. Vestibulum ut luctus ante, at mollis libero. Fusce ex enim, rhoncus quis massa id, scelerisque interdum tortor.
`;

const disclaimer = `
_For a more in-depth summary of the projects that are listed here, and my involvement visit [https://bejoistic.com](bejoistic.com)_
`;

const CV = () => {
  return (
    <Layout className="cv-page">
      <SEO title="Home" />
      <div className="wrapper">
        <Box className="home-box">
          <h1>Ahmad Ainul Rizki</h1>
          <Logo className="logo -hide-screen" />
        </Box>
        <RichText text={text} />
        <RichText className="disclaimer -hide-screen" text={disclaimer} />
      </div>
    </Layout>
  );
};

export default CV;
