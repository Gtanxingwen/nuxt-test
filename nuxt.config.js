module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.json$/,
          loader: 'json-loader'
        })
        config.node = {
          console: true,
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
        }
      }
    },
    vendor: [
      'axios'
    ],
  },
  plugins: [
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/http.js' },
    { src: '~/plugins/mixin.js', ssr: false },
    { src: '~/plugins/bus.js', ssr: false }
  ],
  router: {
    middleware: []
  }
}
