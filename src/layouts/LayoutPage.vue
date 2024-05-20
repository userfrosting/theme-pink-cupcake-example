<script setup lang="ts">
import NavMenuMain from '../components/NavMenuMain.vue'
import NavBar from '@userfrosting/theme-pink-cupcake/components/NavBar/NavBar.vue' // Test Manual direct import
import { MainContent } from '@userfrosting/theme-pink-cupcake/components' // Test manual import from export
</script>

<template>
    <NavBar title="Pink Cupcake" to="/">
        <NavMenuMain />
    </NavBar>
    <MainContent>
        <slot></slot>
    </MainContent>
    <UFFooterContent>
        Copyright 2024 - <a href="https://www.userfrosting.com">Created by UserFrosting</a> | Built
        with
        <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip
            ><span data-uk-icon="uikit"></span
        ></a>
    </UFFooterContent>
</template>
