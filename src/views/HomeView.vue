<script setup lang="ts">
import { AlertContainer } from '@userfrosting/theme-pink-cupcake/components'
import { AlertStyle } from '@userfrosting/theme-pink-cupcake/types'
</script>

<template>
  TheWelcome !
  <AlertContainer title="Primary" description="Lorem Ipsum" :style="AlertStyle.Danger" />
  <UFAlertContainer title="Primary" description="Lorem Ipsum" />
</template>
