require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const settings = require("./src/util/site.json")

module.exports = {
  flags: {},
  siteMetadata: settings.meta,
  plugins: [
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     // apiKey: process.env.SHOPIFY_API_KEY,
    //     password: process.env.SHOPIFY_SHOP_PASSWORD,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //     shopifyConnections: ["collections"],
    //     salesChannel:"Secure3",
    //   },
    // },

{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: "assets",
          },
        },
      ],
    },
  },

  

  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      custom: {
        families: ['compacta'],
        urls: ['/assets/fonts/fonts.css'],
      },
    },
  },

  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -100,
      duration: 1000,
    }
  },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets/ 
          include: /\.svg$/
        }
      }
    },

    // {
    //   resolve: `gatsby-plugin-modal-routing-3`,
    //   options: {
    //     // A selector to set react-modal's app root to, default is `#___gatsby`
    //     // See http://reactcommunity.org/react-modal/accessibility/#app-element
    //     appElement: '#___gatsby',

    //     // Object of props that will be passed to the react-modal container
    //     // See http://reactcommunity.org/react-modal/#usage
    //     modalProps: { },
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              // tracedSVG: true,
              loading: "lazy",
            },
          },

          {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [
              {
                resolve: "gatsby-remark-better-embed-video",
                options: {
                  width: 800,
                  ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
                  height: 400, // Optional: Overrides optional.ratio.
                  related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
                  noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
                  showInfo: false // Optional: Hides video title and player actions.
                }
              }
              ]
            }
          },
          

          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    // 'gatsby-plugin-sharp-exif',
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-static-cms`,

    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     modulePath: ``, // default: undefined
    //     enableIdentityWidget: true,
    //     publicPath: `admin`,
    //     htmlTitle: `All in 60 CMS`,
    //     htmlFavicon: `static/siteimages/manifest-icon-192.png`,
    //     includeRobots: false,
    //     logo_url: 'https://twilightscapes.com/assets/tw-logo-white.svg'
    //   },
    // },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `backgrounds`,
    //     path: `${__dirname}/src/img/front/`, 
    //   },
    // },


 
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       settings.ga, // Google Analytics / GA
    //     ],
    //   },
    // },

    
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: settings.ga,
    //   },
    // },

    
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://allin60.com',
    //     sitemap: 'https://allin60.com/sitemap.xml',
    //     resolveEnv: () => process.env.GATSBY_ENV,
    //     env: {
    //       development: {
    //         policy: [{ userAgent: '*', allow: ['/'] }]
    //       },
    //       production: {
    //         policy: [{ userAgent: '*', allow: '/' }]
    //       }
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `All in 60 Seconds`,
        short_name: `All in 60`,
        start_url: `/?user_mode=app`,
        description: `All in ONLY 60 seconds`,
        background_color: `#111`,
        lang: `en`,
        theme_color: `#111`,
        display: `standalone`,
 icon: `static/assets/logo.svg`, // This path is relative to the root of the site.
 icon_options: {
  purpose: `any maskable`,
},
      icons: [
        {
          src: `/static/siteimages/manifest-icon-192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/static/siteimages/manifest-icon-512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ], // Add or remove icon sizes as desired
      },
    },
    "gatsby-plugin-offline",
  ],
}

