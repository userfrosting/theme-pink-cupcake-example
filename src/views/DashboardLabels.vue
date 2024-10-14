<script setup lang="ts">
import { Severity } from '@userfrosting/sprinkle-core/types'
</script>

<template>
    <UFCardBox>
        <h3 class="uk-heading-divider">Labels</h3>
        <div>
            <UFLabel :severity="Severity.Primary">Primary</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Secondary">Secondary</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Muted">Muted</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Success">Success</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Warning">Warning</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Danger">Danger</UFLabel>
        </div>
        <div>
            <UFLabel :severity="Severity.Info">Info</UFLabel>
        </div>

        <h3 class="uk-heading-divider">Default</h3>
        <div>
            <UFLabel>Default</UFLabel>
        </div>

        <h3 class="uk-heading-divider">Severity defined as strings</h3>
        <div>
            <UFLabel severity="Primary">Primary</UFLabel>
        </div>
        <div>
            <UFLabel severity="Secondary">Secondary</UFLabel>
        </div>
        <div>
            <UFLabel severity="Muted">Muted</UFLabel>
        </div>
        <div>
            <UFLabel severity="Success">Success</UFLabel>
        </div>
        <div>
            <UFLabel severity="Warning">Warning</UFLabel>
        </div>
        <div>
            <UFLabel severity="Danger">Danger</UFLabel>
        </div>
        <div>
            <UFLabel severity="Info">Info</UFLabel>
        </div>
    </UFCardBox>
</template>
