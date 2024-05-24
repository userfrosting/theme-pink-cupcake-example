<script setup lang="ts">
import { AlertContainer } from '@userfrosting/theme-pink-cupcake/components'
import { type AlertInterface } from '@userfrosting/theme-pink-cupcake/types'

defineProps<{
    title: string
    alerts: AlertInterface[]
}>()
</script>

<template>
    <UFCardBox :title="title">
        <template v-for="alert in alerts" :key="alert.id">
            <AlertContainer :alert="alert" />
        </template>
    </UFCardBox>
</template>
