<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type AlertInterface, Severity } from '@userfrosting/sprinkle-core/types'
import AlertsDisplay from '../components/AlertsDisplay.vue'

/**
 * Dynamic alert
 */
const dynamicAlert = ref<AlertInterface>()
function successAlert() {
    dynamicAlert.value = {
        title: 'Success',
        description: 'Action was successful !',
        style: Severity.Success,
        closeBtn: true
    }
}
function errorAlert() {
    dynamicAlert.value = {
        title: 'Error',
        description: 'Action was not so successful !',
        style: Severity.Danger,
        closeBtn: true
    }
}
function dismissAlert() {
    dynamicAlert.value = undefined
}

/**
 * Dynamic alert Collection
 */
// Array container for alerts collection
const alerts: Array<AlertInterface> = reactive([
    {
        title: 'Default alert #1',
        description: 'Lorem Ipsum',
        style: Severity.Primary,
        closeBtn: true
    },
    {
        title: 'Default alert #2',
        description: 'Lorem Ipsum',
        style: Severity.Warning,
        closeBtn: true
    },
    {
        title: 'Default alert #3',
        description: 'Lorem Ipsum',
        style: Severity.Danger,
        closeBtn: true
    }
])
function addAlert() {
    alerts.push({
        title: 'Success',
        description: 'Added alerts',
        style: Severity.Success,
        closeBtn: true
    })
}
function removeAlert() {
    alerts.splice(0, 1)
}
// Remove all alerts from the collection
function deleteAlerts() {
    alerts.splice(0, alerts.length)
}
function removeOneAlert(index: number) {
    alerts.splice(index, 1)
}

/**
 * Other cases
 */
// Const for later
const Lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. In hac habitasse platea dictumst quisque sagittis purus. Ac felis donec et odio pellentesque diam volutpat'

// Normal use
const normalAlerts: Array<AlertInterface> = [
    {
        title: 'Primary (default)',
        description: 'Lorem Ipsum',
        style: Severity.Primary,
        closeBtn: true
    },
    { title: 'Success', description: 'Lorem Ipsum', style: Severity.Success, closeBtn: true },
    { title: 'Warning', description: 'Lorem Ipsum', style: Severity.Warning, closeBtn: true },
    { title: 'Danger', description: 'Lorem Ipsum', style: Severity.Danger, closeBtn: true },
    { title: 'Info', description: 'Lorem Ipsum', style: Severity.Info, closeBtn: true },
    { title: 'Secondary', description: 'Lorem Ipsum', style: Severity.Secondary, closeBtn: true },
    { title: 'Muted', description: 'Lorem Ipsum', style: Severity.Muted, closeBtn: true }
]

// No Title
const noTitleAlerts: Array<AlertInterface> = [
    { description: 'Primary - Lorem Ipsum', style: Severity.Primary },
    { description: 'Success - Lorem Ipsum', style: Severity.Success },
    { description: 'Warning - Lorem Ipsum', style: Severity.Warning },
    { description: 'Danger - Lorem Ipsum', style: Severity.Danger },
    { description: 'Info - Lorem Ipsum', style: Severity.Info },
    { description: 'Secondary - Lorem Ipsum', style: Severity.Secondary },
    { description: 'Muted - Lorem Ipsum', style: Severity.Muted }
]

// No Descriptions
const noDescriptionAlerts: Array<AlertInterface> = [
    { title: 'Primary - Lorem Ipsum', style: Severity.Primary },
    { title: 'Success - Lorem Ipsum', style: Severity.Success },
    { title: 'Warning - Lorem Ipsum', style: Severity.Warning },
    { title: 'Danger - Lorem Ipsum', style: Severity.Danger },
    { title: 'Info - Lorem Ipsum', style: Severity.Info },
    { title: 'Secondary - Lorem Ipsum', style: Severity.Secondary },
    { title: 'Muted - Lorem Ipsum', style: Severity.Muted }
]

// No Title + Close
const noTitleCloseAlerts: Array<AlertInterface> = [
    { description: 'Lorem Ipsum', style: Severity.Primary, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Success, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Warning, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Danger, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Info, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Secondary, closeBtn: true },
    { description: 'Lorem Ipsum', style: Severity.Muted, closeBtn: true }
]

// No icon
const noIconAlerts: Array<AlertInterface> = [
    { title: 'Primary', description: 'Lorem Ipsum', style: Severity.Primary, hideIcon: true },
    { title: 'Success', description: 'Lorem Ipsum', style: Severity.Success, hideIcon: true },
    { title: 'Warning', description: 'Lorem Ipsum', style: Severity.Warning, hideIcon: true },
    { title: 'Danger', description: 'Lorem Ipsum', style: Severity.Danger, hideIcon: true },
    { title: 'Info', description: 'Lorem Ipsum', style: Severity.Info, hideIcon: true },
    { title: 'Secondary', description: 'Lorem Ipsum', style: Severity.Secondary, hideIcon: true },
    { title: 'Muted', description: 'Lorem Ipsum', style: Severity.Muted, hideIcon: true }
]

// String style
const styleAsStringAlerts: Array<AlertInterface> = [
    { title: 'String Primary', description: 'Lorem Ipsum', style: 'Primary' },
    { title: 'String Success', description: 'Lorem Ipsum', style: 'Success' },
    { title: 'String Warning', description: 'Lorem Ipsum', style: 'Warning' },
    { title: 'String Danger', description: 'Lorem Ipsum', style: 'Danger' },
    { title: 'String Info', description: 'Lorem Ipsum', style: 'Info' },
    { title: 'String Secondary', description: 'Lorem Ipsum', style: 'Secondary' },
    { title: 'String Muted', description: 'Lorem Ipsum', style: 'Muted' }
]

// Long description
const longDescriptionAlerts: Array<AlertInterface> = [
    { title: 'Long description', description: Lorem, closeBtn: true },
    { description: Lorem, closeBtn: true },
    { title: Lorem, closeBtn: true }
]

const miscAlerts: Array<AlertInterface> = [
    // @ts-ignore This is explicitly wrong for testing
    { title: 'String Default / Non-Exist', description: 'Lorem Ipsum', style: 'Foo' },

    // Test each defaults
    { title: 'No Style', description: 'Lorem Ipsum' },
    { title: 'No Description' },
    { description: 'Lorem Ipsum (No Title)' },
    { title: 'With HTML in description', description: 'Lorem <strong>very</strong> Ipsum' },
    { title: 'With Description and close Button', description: 'Lorem Ipsum', closeBtn: true },
    { description: 'Alert with close button and no title', closeBtn: true },
    { title: 'Alert with no description, but close button', closeBtn: true }
]

// Simple var for testing
const myAlert: AlertInterface = {
    title: 'Alert from Var',
    description: 'This is the description',
    style: Severity.Warning
}

/**
 * Reaction for close event
 */
function alertClosed() {
    alert('The alert will be closed')
}
</script>

<template>
    <UFHeaderPage title="Alerts" />

    <div class="uk-child-width-1-1" uk-grid>
        <div>
            <UFCardBox title="Dynamic alert">
                <button class="uk-button uk-button-primary uk-button-small" @click="successAlert()">
                    Success
                </button>
                <button
                    class="uk-button uk-button-danger uk-button-small uk-margin-small-left"
                    @click="errorAlert()">
                    Error
                </button>
                <button
                    class="uk-button uk-button-default uk-button-small uk-margin-small-left"
                    @click="dismissAlert()">
                    Clear
                </button>
                <UFAlert v-if="dynamicAlert" :alert="dynamicAlert" />
            </UFCardBox>
        </div>

        <div>
            <UFCardBox title="Dynamic alert Collection">
                <div class="uk-button-group">
                    <button
                        class="uk-button uk-button-default uk-button-small"
                        @click="removeAlert()">
                        -
                    </button>
                    <button
                        class="uk-button uk-button-default uk-button-small"
                        @click="deleteAlerts()">
                        Clear all
                    </button>
                    <button class="uk-button uk-button-default uk-button-small" @click="addAlert()">
                        +
                    </button>
                </div>
                <template v-for="(alert, index) in alerts" :key="alert.id">
                    <UFAlert :alert="alert" @close="removeOneAlert(index)" />
                </template>
            </UFCardBox>
        </div>

        <div>
            <AlertsDisplay title="Default alerts, with close button" :alerts="normalAlerts" />
        </div>
        <div>
            <AlertsDisplay title="No description, no close button" :alerts="noDescriptionAlerts" />
        </div>
        <div>
            <AlertsDisplay title="No title, no close button" :alerts="noTitleAlerts" />
        </div>
        <div>
            <AlertsDisplay title="No title, with close button" :alerts="noTitleCloseAlerts" />
        </div>
        <div>
            <AlertsDisplay title="No icons" :alerts="noIconAlerts" />
        </div>
        <div>
            <AlertsDisplay
                title="Style as string instead of Severity"
                :alerts="styleAsStringAlerts" />
        </div>
        <div>
            <AlertsDisplay title="Alerts with long descriptions" :alerts="longDescriptionAlerts" />
        </div>
        <div>
            <AlertsDisplay title="Misc alerts, misc default" :alerts="miscAlerts" />
        </div>

        <div>
            <UFCardBox title="Alerts objects">
                <UFAlert :alert="myAlert" />
                <UFAlert :alert="{ title: 'UFAlert (with no description)' }" />
                <UFAlert
                    :alert="{ title: 'UFAlert', description: 'With Description' }" />
                <UFAlert
                    :alert="{
                        title: 'UFAlert',
                        description: 'With Description and style',
                        style: 'Danger'
                    }" />
                <UFAlert
                    :alert="{
                        title: 'UFAlert',
                        description: 'With Description and style (object)',
                        style: Severity.Danger
                    }" />
                <UFAlert
                    :alert="{
                        title: 'UFAlert',
                        description: 'With Description and close button',
                        style: 'Success',
                        closeBtn: true
                    }" />
                <UFAlert :alert="{ title: 'Alert description as slot' }">
                    <font-awesome-icon icon="triangle-exclamation" />
                    Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit
                    <font-awesome-icon icon="triangle-exclamation" />
                </UFAlert>
                <UFAlert
                    :alert="{
                        title: 'Alert with both description',
                        description: 'Description not used'
                    }">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </UFAlert>
                <UFAlert
                    :alert="{
                        title: 'Close button action',
                        description: 'Lorem Ipsum',
                        style: Severity.Danger,
                        closeBtn: true
                    }"
                    @close="alertClosed()" />
            </UFCardBox>
        </div>
    </div>
</template>
