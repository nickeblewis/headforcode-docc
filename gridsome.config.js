// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/learn/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'H4C',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/learn/', title: 'Learn' }
      ]
    },
    sidebar: [
      {
        name: 'learn',
        sections: [
          {
            title: 'algorithms',
            items: [
              '/learn/',
              '/learn/algorithm-definition/',
              '/learn/algorithm-practice/',
            ]
          },
          {
            title: 'Javascript',
            items: [
              '/learn/javascript/',
              '/learn/javascript-popularity/',
              '/learn/javascript-example-sites/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
