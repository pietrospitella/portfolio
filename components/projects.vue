<template>
  <div id="projects" class="hero min-h-screen">
    <div class="hero-content">
      <div data-aos="fade-down">
        <h1 class="text-5xl font-bold">{{ t('projectsTitle') }}</h1>
        <div class="flex flex-col">
          <p class="py-6">
            {{ t('projectsDesc') }}
          </p>
          <Swiper
            v-if="$viewport.isLessThan('tablet')"
            data-aos="flip-left"
            class="mySwiper swiper-cards"
            :modules="[SwiperAutoplay, SwiperEffectCards, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true
            }"
          >
            <SwiperSlide
              v-for="(project, idx) in projects"
              :key="project.name"
              class="card bg-base-100 w-80 shadow-xl"
            >
              <figure class="px-10 pt-10">
                <component class="w-20" title="fff" :is="getIcon(project.icon)" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">{{ project.name }}</h2>
                <p class="text-sm text-gray-500 mb-4">{{ project.description }}</p>
                <div class="card-actions">
                  <a :href="project.link" target="_blank" class="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            v-else
            data-aos="flip-left"
            class="flex flex-wrap gap-4 justify-between mx-4"
          >
            <div
              v-for="(project, idx) in projects"
              :key="project.name"
              class="card bg-base-100 w-80 shadow-xl"
            >
              <figure class="px-10 pt-10">
                <img
                  src="~/assets/projects/todospit.svg"
                  class="rounded-xl w-20 h-20"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">{{ project.name }}</h2>
                <p class="text-sm text-gray-500 mb-4">{{ project.description }}</p>
                <div class="card-actions">
                  <a :href="project.link" target="_blank" class="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ref, onMounted } from 'vue'
import projectsJSON from '~/assets/projects.json'
import { useNuxtApp } from '#app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { $viewport } = useNuxtApp() as any
const projects = ref()

const getIcon = (id: string) => defineAsyncComponent(() => import(`~/assets/projects/${id}.svg?component`))

onMounted(async () => {
  projects.value = projectsJSON.projects
})
</script>

<style scoped>
.swiper-slide {
  height: max-content;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 16rem;
  height: 320px;
}
.swiper-cards .swiper-slide {
  border-radius: 8px;
}
ul .skill_items {
  display: inline-block;
  font-weight: bold;
}
ul .skill_items:not(:last-child) {
  padding-right: 4px;
}
ul .skill_items:not(:last-child)::after {
  content: " -";
}
</style>