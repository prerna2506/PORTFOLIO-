/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-phi-seven-ba7rxhbca6.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
}
