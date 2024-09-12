<template>
  <div id="skills" class="hero min-h-screen">
    <div class="hero-content">
      <div data-aos="fade-down">
        <h1 class="text-5xl font-bold">{{t('skillsTitle')}}</h1>
        <div class="flex flex-col">
          <p class="py-6">
            {{t('skillsDesc')}}
          </p>
          <div class="mx-4 overflow-hidden">
            <Swiper
              class="mySwiper swiper-cards"
              :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]" 
              :slides-per-view="1"
              :loop="true"
              :effect="'coverflow'" 
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true
              }"
            >
              <SwiperSlide 
                v-for="(skill, idx) in skills" 
                :key="skill.name"
                class="flex flex-col bg-base-content"
              >
                <component class="h-20" title="fff" :is="getIcon(skill.fileName)" />
                <span class="text-base capitalize text-white">{{ skill.iconName }}</span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ref, onMounted } from 'vue'
import iconsJSON from 'assets/icons.json'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const skills = ref()

const getIcon = (id: string) => defineAsyncComponent(() => import(`assets/icons/${id}.svg?component`))

onMounted(async () => {
  skills.value = iconsJSON.icons
})
</script>

<style scoped>
.swiper-slide {
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 8px;
}
ul .skill_items {
  display:inline-block;
  font-weight: bold;
}

ul .skill_items:not(:last-child) {
  padding-right: 4px;
}
ul .skill_items:not(:last-child)::after {
  content: " -";
  
}
</style>