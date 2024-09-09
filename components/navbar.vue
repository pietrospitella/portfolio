<template>
    <div class="navbar fixed z-50 glass">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <NuxtLink @click="scrollToAnchor('about')">
                            {{ $t('aboutTitle') }}
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="scrollToAnchor('skills')">
                            {{ $t('skillsTitle') }}
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="scrollToAnchor('projects')">
                            {{ $t('projectsTitle') }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink class="btn btn-ghost text-xl" @click="scrollToTop()">
                Pietro Spitella
            </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink @click="scrollToAnchor('about')">
                        {{ $t('aboutTitle') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="scrollToAnchor('skills')">
                        {{ $t('skillsTitle') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="scrollToAnchor('projects')">
                        {{ $t('projectsTitle') }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end pr-4">
            <label class="swap swap-rotate mr-4">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" class="theme-controller" ref="themeRef" :value="themeValue" @click="changeTheme" />

                <!-- sun icon -->
                <svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <!-- moon icon -->
                <svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <!-- lang toggle -->
            <label class="swap swap-rotate size-8">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" :value="langValue" ref="langRef" @click="changeLang" />

                <!-- it icon -->

                <svg width="32px" height="32px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                    class="swap-off iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                    <path fill="#CE2B37" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
                    <path fill="#009246" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
                    <path fill="#EEE" d="M12 5h12v26H12z"></path>
                </svg>

                <!-- us icon -->
                <svg width="32px" height="32px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                    class="swap-on iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                    <path fill="#B22334"
                        d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z">
                    </path>
                    <path fill="#EEE"
                        d="M.068 27.679c.017.093.036.186.059.277c.026.101.058.198.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741a3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z">
                    </path>
                    <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"></path>
                    <path fill="#FFF"
                        d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z">
                    </path>
                </svg>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const langValue = ref('')
const langRef = ref()
const themeValue = ref('')
const themeRef = ref()

const colorMode = useColorMode()
const { setLocale } = useI18n()

const changeLang = () => {
    let isChecked = langRef.value.checked
    if (isChecked) {
        langRef.value.value = 'en'
        setLocale('en')
    } else {
        langRef.value.value = 'it'
        setLocale('it')
    }
}
const changeTheme = (el: any) => {
    
    if (themeValue.value === 'dark') {
        themeRef.value.checked = true
    }
    let isChecked = themeRef.value.checked && themeRef.value.value === 'dark'
    if (isChecked) {
        themeRef.value.value = 'light'
        themeValue.value = 'light'
        colorMode.value = 'light'
    } else {
        themeRef.value.value = 'dark'
        themeValue.value = 'dark'
        colorMode.value = 'dark'
    }
}

const { scrollToAnchor, scrollToTop } = useAnchorScroll({
    toTop: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: 0
        }
    }
})

onMounted(() => {
    if (colorMode?.value) {
        themeValue.value = colorMode.value
        if (themeValue.value === 'dark') {
            themeRef.value.checked = true
            themeRef.value.value = colorMode.value
        }
    }
    if (navigator?.language) {
        langValue.value = navigator.language
        setLocale(langValue.value)
        if (!langValue.value.startsWith('it')) {
            langRef.value.checked = true
        }
    }
})
</script>

<style scoped>
.navbar {
    background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
        rgb(0 0 0 / 0%) 100%
      ),
      linear-gradient(
        var(--glass-reflex-degree, 100deg),
        rgb(255 255 255 / var(--glass-reflex-opacity, 0%)) 25%,
        rgb(0 0 0 / 0%) 25%
    )
}
</style>