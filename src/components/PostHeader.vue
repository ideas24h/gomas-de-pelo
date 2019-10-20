<template>
  <header class="mb-8 sm:mb-16 text-black leading-snug">
    <div class="flex items-center flex-shrink-0  mr-6">
      <g-link  to="/" class="font-bold bg-pink-500  text-center text-white p-8 m-6 text-4xl tracking-tight">
        {{ $static.metadata.siteName }}
      </g-link>
    </div>
    <h2 itemprop="name" class="text-3xl sm:text-5xl leading-tight font-bold mb-4 text-black">{{ post.title }}</h2>
    <h3 itemprop="description" class="text-gray-600 leading-snug">{{ post.description }}</h3>
  </header>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('YYYY-MM-DD');
    },
  },
}
</script>
<static-query>
query{
  metadata{
    siteName
  }
}
</static-query>