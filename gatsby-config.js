module.exports = {
  siteMetadata: {
    title: `mikomura`,
    description: `mikomuraのブログとポートフォリオとブログのサイト`,
    siteUrl: `https://mikomura.dev`,
    lang: `ja`,
    locale: `ja_JP`,
    fbappid: `377567267303069`,
  },
  plugins: [
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-198355645-3",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `mikomuraサイト`,
        short_name: `mikomura`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#546e7a`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "kurobo-note",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "tag",
          },
          {
            endpoint: "portfolio",
          },
          {
            endpoint: "profile",
          },
        ],
      },
    },
  ],
};
