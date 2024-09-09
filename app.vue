<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar/>
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp() as any

onMounted(() => 
AOS.init({
  once: true
}))

useHead({
  title: 'Pietro Spitella',
  meta: [],
  bodyAttrs: {
    class: ''
  },
  script: []
})
</script>
