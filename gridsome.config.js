class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: 'Gomas de pelo',
  siteDescription: "Información de gomas de pelo, donde comprar, comparativas, videos y cuales son las mejores coleteros  ✅",
  siteUrl: 'https://www.gomasdepelo.com',
  titleTemplate: `%s | Ideas`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-youtube','gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        // route: '/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'gomas/**/*.md',
        typeName: 'Goma',
        // route: '/:slug',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-PWSVGNS',
        enabled: true,
        debug: true
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gomas de pelo',
          feed_url: 'https://www.gomasdepelo.com/feed.xml',
          site_url: 'https://www.gomasdepelo.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://www.gomasdepelo.com/' + node.slug,
          author: '@ideas24h',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml'
        }
      }
    },
  ],

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}





