export default ({ siteUrl, title, siteLanguage, seo, author, buildTime }) => ({
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  url: siteUrl,
  headline: title,
  inLanguage: siteLanguage,
  mainEntityOfPage: siteUrl,
  description: seo.description,
  name: title,
  author: {
    '@type': 'Person',
    name: author,
  },
  copyrightHolder: {
    '@type': 'Person',
    name: author,
  },
  copyrightYear: '2019',
  creator: {
    '@type': 'Person',
    name: author,
  },
  publisher: {
    '@type': 'Person',
    name: author,
  },
  datePublished: '2019-01-18T10:30:00+01:00',
  dateModified: buildTime,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}${seo.image}`,
  },
});
