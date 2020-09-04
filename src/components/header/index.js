import React from "react";

import { Link } from "gatsby";

import Logo from "svg/logo.svg";
import Home from "svg/home.svg";
import DDP from "svg/ddp.svg";
import Links from "svg/link.svg";

import RouteIcon from "components/route-icon";

import "./style.css";

const Header = () => {
  return (
    <header id="header" className="-hide-print">
      <div className="wrapper">
        <div>
          <Link className="title" to="/">
            <Logo className="logo" />
            <h2>
              <strong>bejoistic</strong>{" "}
              <span className="weak">
                by Ahmad Ainul
                <span className="-hide-mobile"> Rizki</span>
              </span>
            </h2>
          </Link>
          <nav>
            <ul className="navigation-list">
              <li>
                <Link to="/" activeClassName="-active">
                  <Home className="navigation-icon" />
                </Link>
              </li>
              <li>
                <Link to="/projects" activeClassName="-active" partiallyActive>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/logs" activeClassName="-active" partiallyActive>
                  Logs
                </Link>
              </li>
              <li>
                <Link to="/cv" activeClassName="-active" partiallyActive>
                  CV
                </Link>
              </li>
              {/* <li> */}
              {/*   <Link to="/about" activeClassName="-active"> */}
              {/*     About */}
              {/*   </Link> */}
              {/* </li> */}
              {/* <li> */}
              {/*   <Link to="/follow" activeClassName="-active"> */}
              {/*     <Subscribe className="navigation-icon" /> */}
              {/*   </Link> */}
              {/* </li> */}
              <li>
                <Link to="/links" activeClassName="-active">
                  <Links className="navigation-icon" />
                </Link>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://podcast.bejoistic.com"
                >
                  <DDP className="navigation-icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <RouteIcon />
      </div>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
