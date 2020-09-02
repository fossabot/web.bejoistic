import React from "react";
import "./style.css";

console.info(`
  << 🥏 >>

 ⊂  .@.  ⊃
  \\ (°° /
   \\|T|/
    |=|
    / \\
  _/   \\_

     ~ Hi I'm Bejo
       and I fight for the users! ~
`);

const Footer = () => {
  return (
    <footer id="footer" className="-hide-print">
      <div className="wrapper">
        <ul className="social">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://twitter.com/bejoistic"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://github.com/bejoistic"
            >
              github
            </a>
          </li>
          <li>
            <a
              rel="me noreferrer noopener"
              target="_blank"
              href="http://gitlab.com/bejoistic"
            >
              gitlab
            </a>
          </li>

          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://vero.co/bejoistic"
            >
              vero
            </a>
          </li>
        </ul>
        <span className="year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
