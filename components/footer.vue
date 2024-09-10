<template>
    <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
        <p>Copyright © {{ new Date().getFullYear() }} - {{t('allRightsReserved')}}</p>
    </footer>
</template>


<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>