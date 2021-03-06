import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.script.push(
    {
      type: 'text/javascript',
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          async: true,
      'data-ad-client': "ca-pub-5706637188045956",
    }
    )
  head.htmlAttrs = { lang: 'es' }
  head.bodyAttrs = { class: 'antialiased font-sans' }
}


