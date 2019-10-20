<template>
  <Layout>
    <main itemscope itemtype="http://schema.org/Article" class="py-12 max-w-3xl mx-auto px-6">
      <post-header :post="$page.post" />
      <article  class="mt-8 sm:mt-16">
        <div class="md:flex-shrink-0 w-64 mx-auto ">
          <a :href="$page.post.afiUrl">
            <g-image v-if="$page.post.coverImage" :src="$page.post.coverImage" itemprop="image" class="rounded-lg md:w-auto" :alt="$page.post.title" />
          </a>
        </div>
        <div class="markdown" v-html="$page.post.content" />  
      </article>
      <div v-if="$page.post.afiUrl" class="sm:object-center">
        <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 shadow-lg rounded-lg uppercase tracking-wider font-semibold" :href="$page.post.afiUrl">
          Ver en Amazon
        </a>
      </div>
      <site-footer class="pt-8 pb-4" />
    </main>
  </Layout>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import Alert from '@/components/Alert'
import PostHeader from '~/components/PostHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    Alert,
    PostHeader,
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
    postIsOlderThanOneYear () {
      let postDate = moment(this.$page.post.datetime)
      return moment().diff(postDate, 'years') > 0 ? true : false
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/briefly-card.png`
    }
  },
}
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    coverImage
    afiUrl
    path
  }
}
</page-query>
