import React from 'react';

const Iframe = ({ data: { hProperties } }) => {
  const { allowfullscreen, frameborder, height, src, width } = hProperties;
  return (
    <iframe
      title={src}
      src={src}
      allowFullScreen={allowfullscreen}
      frameBorder={frameborder}
      height={height}
      width={width}
    />
  );
};

export default Iframe;
