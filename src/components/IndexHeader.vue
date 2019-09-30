<template>
  <header class="mb-8 sm:mb-16 text-black leading-snug">
    <div class="flex items-center flex-shrink-0  mr-6">
      <span class="font-bold bg-pink-500  text-center text-white p-8 m-6 text-4xl tracking-tight">
      <g-link  to="/">{{ $static.metadata.siteName }}</g-link>
      </span>
    </div>
    <h1 class="text-xl sm:text-3xl">Las mejoras <em>gomas de pelo</em>.</h1>
    <p class="text-xl sm:text-3xl">Ofertas y donde comprar <em>gomas de pelo baratas</em></p>
  </header>
</template>


<script>
export default {
  name: 'IndexHeader',
}
</script>

<static-query>
query{
  metadata{
    siteName
  }
}
</static-query>