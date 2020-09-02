export const dateConfigMobile = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

export const dateConfigDesktop = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const getMobileDate = date => {
  return new Date(date).toLocaleDateString("UK", dateConfigMobile);
};

export const getDesktopDate = date => {
  return new Date(date).toLocaleDateString("UK", dateConfigDesktop);
};

export const getDiscussUrl = ({ siteUrl, pathName }) => {
  const twURL = "https://mobile.twitter.com/search?q=";
  const postURL = `${siteUrl}${pathName}`;
  const postURI = encodeURIComponent(postURL);

  return `${twURL}${postURI}`;
};
