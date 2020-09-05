import React, { useEffect } from "react";

const SCRIPT_ID = "commento-script";
const COMMENTO_URL = "https://webmention.bejoistic.com/ui/dist/widget.js";

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
  endPoint,
  tarGet
}: {
  id: string;
  endPoint?: string;
  tarGet?: string;
}) => {
  useEffect(() => {
    if (!window) {
      return;
    }
    const document = window.document;
    if (document.getElementById("commento")) {
      insertScript(COMMENTO_URL, SCRIPT_ID, document.body, {
        "endpoint": endPoint,
        "target": tarGet
      });
    }
    return () => removeScript(SCRIPT_ID, document.body);
  }, [id]);

  return <div class="webmentions webmentions-container" key={id} />;
};

export default Commento;