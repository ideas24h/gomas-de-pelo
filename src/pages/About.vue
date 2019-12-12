<template>
  <Layout>
    <main class="py-12 max-w-2xl mx-auto px-6">
      <header>
        <h1 class="text-3xl sm:text-5xl leading-tight font-bold text-black">About</h1>
        <p class="text-gray-600 italic text-lg sm:text-2xl">Pagina de Afiliados &hellip;</p>
      </header>
      <article class="my-16">
        <div class="markdown">
              <p>  
          Este sitio web está inscrito en el programa de afiliados de Amazon.es y genera ingresos por las compras realizadas por los usuarios a través de los enlaces de afiliado que se pueden encontrar en ésta. Puede consultar las condiciones de este programa en la página oficial de Amazon.
          <br>La inscripción a este programa no afecta a la información proporcionada en las páginas de este sitio web, es independiente, veraz y su finalidad principal es ayudar a los usuarios en su decisión de compra para cualquiera de los productos que se analizan en Losmejoresproductos. <br>
          Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc. o de sociedades de su grupo. 
      </p>
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    SiteFooter
  },
  metaInfo () {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Introduction to the Bleda blog starter for Gridsome.',
          noindex: true
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'About' },
        { property: "og:description", content: 'Introduction to the Bleda blog starter for Gridsome.' },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: '/images/bleda-card.png' },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'About' },
        { name: "twitter:description", content: 'Introduction to the Bleda blog starter for Gridsome.' },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: '/images/bleda-card.png' },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
  },
}
</script>
