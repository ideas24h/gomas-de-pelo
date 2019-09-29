<template>
  <Layout>
    <main class="py-12 max-w-3xl mx-auto px-6">
      <goma-header :goma="$page.goma" />
      <article class="mt-8 sm:mt-16">
        <div class="markdown" v-html="$page.goma.description" />
        <div class="markdown" v-html="$page.goma.precio" />
        <div class="markdown" v-html="$page.goma.content" />
      </article>
      <site-footer class="pt-8 pb-4" />
    </main>
  </Layout>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import Alert from '@/components/Alert'
import GomaHeader from '~/components/GomaHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    Alert,
    GomaHeader,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description(this.$page.post)
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.description(this.$page.post) },
        { property: "og:url", content: `${this.config.siteUrl + this.$page.post.path}/` },
        { property: "article:published_time", content: moment(this.$page.post.date).format('YYYY-MM-DD') },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:description", content: this.description(this.$page.post) },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  mounted () {
    import('medium-zoom').then(mediumZoom => {
      this.zoom = mediumZoom.default('.markdown p > img')
    })
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/briefly-card.png`
    }
  },
}
</script>

<page-query>
query Goma ($path: String) {
  goma (path: $path) {
    title
    content
    description
    precio
    path
  }
}
</page-query>
