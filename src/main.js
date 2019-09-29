import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'es' }
  head.bodyAttrs = { class: 'antialiased font-sans' }
}
