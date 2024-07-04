<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pietro Spitella',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
