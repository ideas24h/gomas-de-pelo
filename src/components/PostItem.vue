<template>
  <li class="mb-8 sm:mb-16 -mx-5" :class="{hidden: !visible}">
    <div class="md:flex-shrink-0 w-64 mx-auto ">
      <g-image v-if="post.node.coverImage" :src="post.node.coverImage" class="rounded-lg md:w-auto" alt="Cover" />
    </div>
    {{ post.node.coverImage }} aqui
    <g-link :to="`${post.node.path}/`" class="article-list-link">
      <h2>{{ post.node.title }}</h2>
      <p class="text-gray-400 leading-snug">{{ post.node.description }}</p>
      <!-- <time :datetime="post.node.datetime" class="text-gray-400 text-sm">{{ formatPublishDate(post.node.datetime) }}</time> -->
    </g-link>
  </li>
</template>

<script>
import moment from 'moment'

export default {
  name: 'PostItem',
  props: ['post', 'show'],
  methods: {
    formatPublishDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
  computed: {
    contentLength () {
      return this.post.node.content.replace(/<(?:.|\n)*?>/gm, '').length
    },
    visible () {
      if (this.show == 'longer') {
        return this.contentLength > 1000 ? true : false
      }
      if (this.show == 'shorter') {
        return this.contentLength < 1000 ? true : false
      }
      return true
    },
  }
}
</script>
