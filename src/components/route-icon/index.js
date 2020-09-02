import React from "react";
import { globalHistory } from "@reach/router";
import useDarkMode from "use-dark-mode";

import Projects from "svg/portfolio.svg";
import Subscribe from "svg/subscribe.svg";

import CV from "svg/cv.svg";
import Logs from "svg/logs.svg";
import Home from "svg/home.svg";
import Links from "svg/link.svg";

import "./style.css";

const getRouteIcon = path => {
  if (path === "/") return Home;
  if (path.includes("/projects")) return Projects;
  if (path.includes("/cv")) return CV;
  if (path.includes("/logs")) return Logs;
  if (path.includes("/links")) return Links;
  if (path.includes("/follow")) return Subscribe;
  return null;
};

const RouteIcon = () => {
  const path = globalHistory.location.pathname;
  const darkMode = useDarkMode(true, {
    classNameDark: "-dark",
    classNameLight: "-light",
  });

  const Component = getRouteIcon(path);
  if (!Component) return null;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => {
        darkMode.toggle();
      }}
    >
      <Component className="route-icon" />
    </button>
  );
};

export default RouteIcon;
