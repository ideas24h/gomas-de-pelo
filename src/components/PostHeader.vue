<template>
  <header class=" xl:bg-red-200 lg:bg-red-200 md:bg-red-200 sm:bg-red-200 bg-red-200">
    <div class=" md:flex justify-center py-0 ">
        <div class=" p-2 my-auto">
            <img class="  rounded-full h-48 w-48 mx-auto border-8 border-white-800 "
                src="/images/posts/chica-goma-pelo.jpg">
        </div>
        <div class="p-4  my-auto ">
          <g-link  to="/" class="font-bold  w-auto  text-center text-white p-8 m-6 text-4xl tracking-tight">
                <h1 class="text-red-600 text-3xl text-center"> {{ $static.metadata.siteName }} </h1>
          </g-link>
          <p class=" text-white-600 text-xl "> Ofertas y donde comprar <em>gomas para el pelo baratas</em> ✅ </p>
        </div>

    </div>
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