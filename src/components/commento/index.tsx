import React, { useEffect } from "react";

const CONTAINER_ID = "commento";
const SCRIPT_ID = "commento-script";
const COMMENTO_URL = "https://track.bejoistic.com/embed.js";

interface DataAttributes {
  [key: string]: string | boolean | undefined;
}

const insertScript = (
  src: string,
  id: string,
  parentElement: HTMLElement,
  dataAttributes: DataAttributes
) => {
  const script = window.document.createElement("script");
  script.async = true;
  script.src = src;
  script.id = id;

  Object.entries(dataAttributes).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }
    script.setAttribute(`data-${key}`, value.toString());
  });

  parentElement.appendChild(script);
};

const removeScript = (id: string, parentElement: HTMLElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};

const Commento = ({
  id,
  saGraphurl,
  viewSelector,
  noFonts,
  hideDeleted,
  pageId
}: {
  id: string;
  saGraphurl?: string;
  viewSelector?: string;
  noFonts?: boolean;
  hideDeleted?: boolean;
  pageId?: string;
}) => {
  useEffect(() => {
    if (!window) {
      return;
    }
    const document = window.document;
    if (document.getElementById("commento")) {
      insertScript(COMMENTO_URL, SCRIPT_ID, document.body, {
        "sa-graph-url": saGraphurl,
        "sa-page-views-selector": viewSelector,
        "no-fonts": noFonts,
        "hide-deleted": hideDeleted,
        "page-id": pageId
      });
    }
    return () => removeScript(SCRIPT_ID, document.body);
  }, [id]);

  return <div key={id} id={CONTAINER_ID} />;
};

export default Commento;