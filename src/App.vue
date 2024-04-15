<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <UFNavBar title="Pink Cupcake">
    <UFNavBarItem to="/" label="Home" />
    <UFNavBarItem to="/about" label="About" />
    </UFNavBar>
    <UFMainContent>
        <RouterView />
    </UFMainContent>  
</template>