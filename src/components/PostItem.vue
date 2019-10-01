<template>
  <li class="mb-8 sm:mb-16 -mx-5">

    <div class="md:flex flex-wrap w-128 mx-auto ">
      <g-link :to="`${post.node.path}/`" class="article-list-link">
                  <g-image v-if="post.node.coverImage" :src="post.node.coverImage"  class="rounded-lg md:w-32" :alt="post.node.title" />
        <h2 class="text-2xl">{{ post.node.title }}</h2>
        <p class="text-gray-600 leading-snug">{{ post.node.description }}</p>
      </g-link>

    </div>
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
