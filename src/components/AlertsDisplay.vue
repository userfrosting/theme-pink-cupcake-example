<script setup lang="ts">
import { type AlertInterface } from '@userfrosting/sprinkle-core/types'

defineProps<{
    title: string
    alerts: AlertInterface[]
}>()
</script>

<template>
    <UFCardBox :title="title">
        <template v-for="alert in alerts" :key="alert.id">
            <UFAlert :alert="alert" />
        </template>
    </UFCardBox>
</template>
