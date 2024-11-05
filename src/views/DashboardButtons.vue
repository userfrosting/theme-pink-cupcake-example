<script setup lang="ts">
const buttons = [
    { name: 'Default', class: 'uk-button-default' },
    { name: 'Primary', class: 'uk-button-primary' },
    { name: 'Secondary', class: 'uk-button-secondary' },
    { name: 'Success', class: 'uk-button-success' },
    { name: 'Danger', class: 'uk-button-danger' },
    { name: 'Warning', class: 'uk-button-warning' },
    { name: 'Info', class: 'uk-button-info' },
    { name: 'Muted', class: 'uk-button-muted' }
]
</script>

<template>
    <div class="uk-margin">
        <UFCardBox>
            <p>Display custom severity styles: <strong>Success, Warning, Info & Muted</strong></p>
            <table class="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th>Default state</th>
                        <th>Active</th>
                        <th>Disabled</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(button, index) in buttons" :key="index">
                        <td>
                            <button class="uk-button" :class="button.class" :tabindex="index">
                                {{ button.name }}
                            </button>
                        </td>
                        <td>
                            <button class="uk-button uk-active" :class="button.class">
                                {{ button.name }}
                            </button>
                        </td>
                        <td>
                            <button class="uk-button" :class="button.class" disabled>
                                {{ button.name }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </UFCardBox>
    </div>

    <div class="uk-margin">
        <UFCardBox class="uk-background-secondary uk-light">
            <p>Inverse (Dark Mode)</p>
            <table class="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th>Default state</th>
                        <th>Active</th>
                        <th>Disabled</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(button, index) in buttons" :key="index">
                        <td>
                            <button class="uk-button" :class="button.class" :tabindex="index">
                                {{ button.name }}
                            </button>
                        </td>
                        <td>
                            <button class="uk-button uk-active" :class="button.class">
                                {{ button.name }}
                            </button>
                        </td>
                        <td>
                            <button class="uk-button" :class="button.class" disabled>
                                {{ button.name }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </UFCardBox>
    </div>
</template>
