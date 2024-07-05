<template>
    <div id="hero" class="hero min-h-screen"
        style="background-image: url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center fading_el opacity-0">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello, I'm Pietro Spitella</h1>
                <p class="mb-5">
                    Just another Fronted Developer.
                </p>
                <button @click="scrollToAnchor('about')" class="btn btn-primary">Know Me</button>
                    <client-only>
                        <Vue3Lottie
                            class="fading_el"
                            :animationData="pcJSON"
                            :height="300"
                            :width="300"
                        />
                    </client-only>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap"
import { onMounted } from "vue"
import { Vue3Lottie } from 'vue3-lottie'
import pcJSON from '../assets/pc.json'

const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  }
})

onMounted(() => {
    gsap.to('.fading_el', {
        y: 50,
        duration: 2,
        delay: 0.5,
        opacity: 1
    })
})
</script>