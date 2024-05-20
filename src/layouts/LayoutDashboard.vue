<script setup lang="ts">
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <UFNavBar title="Pink Cupcake" to="/">
        <NavMenuMain />
    </UFNavBar>
    <UFSideBar>
        <UFSideBarLabel label="NAVIGATION" />
        <UFSideBarItem :to="{ name: 'dashboard.index' }" faIcon="gauge">Dashboard</UFSideBarItem>
        <UFSideBarItem :to="{ name: 'dashboard.table' }" faIcon="table" label="Table" />
        <!-- Dropdown -->
        <UFSideBarDropdown :to="{ name: 'dashboard.components' }" label="Components" faIcon="palette">
            <UFSideBarItem :to="{ name: 'dashboard.components.alerts' }" label="Alerts" />
            <UFSideBarItem :to="{ name: 'dashboard.components.cards' }" label="Cards" />
        </UFSideBarDropdown>
        <!-- Dropdown 2 -->
        <UFSideBarDropdown to="/" label="Reports" faIcon="fa-regular fa-file-lines">
            <UFSideBarItem to='' label="Sub item" />
            <UFSideBarItem to='' label="Sub item" />
            <UFSideBarDropdown to='' label="Sub Nested" hideCaret>
                <UFSideBarItem to='' label="Sub sub item" />
                <UFSideBarItem to='' label="Sub sub item" />
            </UFSideBarDropdown>
        </UFSideBarDropdown>
    </UFSideBar>
    <UFMainContent>
        <slot></slot>
    </UFMainContent>
    <UFFooterContent>
        Copyright 2024 - <a href="https://www.userfrosting.com">Created by UserFrosting</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a> 
    </UFFooterContent>
</template>
