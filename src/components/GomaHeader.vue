<template>
  <header class="mb-8 sm:mb-16 text-black leading-snug">
    <div class="flex items-center flex-shrink-0  mr-6">
      <g-link  to="/" class="font-bold bg-pink-500  text-center text-white p-8 m-6 text-4xl tracking-tight">
        {{ $static.metadata.siteName }}
      </g-link>
      </div>
    <h2 class="text-3xl sm:text-5xl leading-tight font-bold mb-4 text-black">{{ goma.title }}</h2>
  </header>
</template>

<script>
import moment from 'moment'

export default {
  props: ['goma'],
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