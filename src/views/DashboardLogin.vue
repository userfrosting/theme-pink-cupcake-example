<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <UFPageLogin @goto-registration="router.push({ name: 'dashboard.auth.register' })"
        @goto-forgot-password="router.push({ name: 'dashboard.auth.forgot-password' })"
        @goto-resend-verification="router.push({ name: 'dashboard.auth.resend-verification' })" />
</template>
