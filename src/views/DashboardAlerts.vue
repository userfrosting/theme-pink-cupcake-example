<script setup lang="ts">
import { reactive, ref } from 'vue'
import LayoutDashboard from '../layouts/LayoutDashboard.vue'
import { type AlertInterface, AlertStyle } from '@userfrosting/theme-pink-cupcake/types'
import { AlertContainer } from '@userfrosting/theme-pink-cupcake/components'
import AlertsDisplay from '../components/AlertsDisplay.vue'

// Array container for alerts collection
const alerts: Array<AlertInterface> = reactive([
    { title: 'Default alert #1', description: 'Lorem Ipsum', style: AlertStyle.Primary },
    { title: 'Default alert #2', description: 'Lorem Ipsum', style: AlertStyle.Warning }
])

// Dynamic alert (not in array)
const dynamicAlert = ref<AlertInterface>()

// Const for later
const Lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. In hac habitasse platea dictumst quisque sagittis purus. Ac felis donec et odio pellentesque diam volutpat'

// Normal use
const normalAlerts: Array<AlertInterface> = [
    {
        title: 'Primary (default)',
        description: 'Lorem Ipsum',
        style: AlertStyle.Primary,
        closeBtn: true
    },
    { title: 'Success', description: 'Lorem Ipsum', style: AlertStyle.Success, closeBtn: true },
    { title: 'Warning', description: 'Lorem Ipsum', style: AlertStyle.Warning, closeBtn: true },
    { title: 'Danger', description: 'Lorem Ipsum', style: AlertStyle.Danger, closeBtn: true }
]

// No Title
const noTitleAlerts: Array<AlertInterface> = [
    { description: 'Lorem Ipsum', style: AlertStyle.Primary },
    { description: 'Lorem Ipsum', style: AlertStyle.Success },
    { description: 'Lorem Ipsum', style: AlertStyle.Warning },
    { description: 'Lorem Ipsum', style: AlertStyle.Danger }
]

// No Title + Close
const noTitleCloseAlerts: Array<AlertInterface> = [
    { description: 'Lorem Ipsum', style: AlertStyle.Primary, closeBtn: true },
    { description: 'Lorem Ipsum', style: AlertStyle.Success, closeBtn: true },
    { description: 'Lorem Ipsum', style: AlertStyle.Warning, closeBtn: true },
    { description: 'Lorem Ipsum', style: AlertStyle.Danger, closeBtn: true }
]

// No icon
const noIconAlerts: Array<AlertInterface> = [
    { title: 'Primary', description: 'Lorem Ipsum', style: AlertStyle.Primary, hideIcon: true },
    { title: 'Success', description: 'Lorem Ipsum', style: AlertStyle.Success, hideIcon: true },
    { title: 'Warning', description: 'Lorem Ipsum', style: AlertStyle.Warning, hideIcon: true },
    { title: 'Danger', description: 'Lorem Ipsum', style: AlertStyle.Danger, hideIcon: true }
]

// String style
const styleAsStringAlerts: Array<AlertInterface> = [
    { title: 'String Primary', description: 'Lorem Ipsum', style: 'Primary' },
    { title: 'String Success', description: 'Lorem Ipsum', style: 'Success' },
    { title: 'String Warning', description: 'Lorem Ipsum', style: 'Warning' },
    { title: 'String Danger', description: 'Lorem Ipsum', style: 'Danger' }
]

// Long description
const longDescriptionAlerts: Array<AlertInterface> = [
    { title: 'Long description', description: Lorem, closeBtn: true },
    { description: Lorem, closeBtn: true }
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
    style: AlertStyle.Warning
}

/**
 * Reaction for button press
 */
function addAlert() {
    alerts.push({
        title: 'Success',
        description: 'Added alerts',
        style: AlertStyle.Success,
        closeBtn: true
    })
}
function removeAlert() {
    alerts.splice(0, 1)
}

/**
 * Remove all alerts from the collection
 */
function deleteAlerts() {
    alerts.splice(0, alerts.length)
}

/**
 * Reaction for close event
 */
function alertClosed() {
    alert('The alert will be closed')
}

/**
 * Dynamic alert actions
 * N.B.: Such a dynamic alert should not have a close button, as it will remove
 * the html from the DOM. An array to store a collection of alerts if preferred
 * in this case.
 */
function successAlert() {
    dynamicAlert.value = {
        title: 'Success',
        description: 'Action was successful !',
        style: AlertStyle.Success
    }
}
function errorAlert() {
    dynamicAlert.value = {
        title: 'Error',
        description: 'Action was not so successful !',
        style: AlertStyle.Danger
    }
}
function dismissAlert() {
    dynamicAlert.value = undefined
}
</script>

<template>
    <LayoutDashboard>
        <div class="uk-child-width-1-1" uk-grid>
            <div>
                <UFCardBox title="Dynamic alert">
                    <button
                        class="uk-button uk-button-primary uk-button-small"
                        @click="successAlert()">
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
                    <AlertContainer v-if="dynamicAlert" :alert="dynamicAlert" />
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
                        <button
                            class="uk-button uk-button-default uk-button-small"
                            @click="addAlert()">
                            +
                        </button>
                    </div>
                    <template v-for="alert in alerts" :key="alert.id">
                        <AlertContainer :alert="alert" />
                    </template>
                </UFCardBox>
            </div>

            <div>
                <AlertsDisplay title="Default alerts, with close button" :alerts="normalAlerts" />
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
                    title="Style as string instead of AlertStyle"
                    :alerts="styleAsStringAlerts" />
            </div>
            <div>
                <AlertsDisplay
                    title="Alerts with long descriptions"
                    :alerts="longDescriptionAlerts" />
            </div>
            <div>
                <AlertsDisplay title="Misc alerts, misc default" :alerts="miscAlerts" />
            </div>

            <div>
                <UFCardBox title="Alerts objects">
                    <AlertContainer :alert="myAlert" />
                    <AlertContainer :alert="{ title: 'AlertContainer (with no description)' }" />
                    <AlertContainer
                        :alert="{ title: 'AlertContainer', description: 'With Description' }" />
                    <AlertContainer
                        :alert="{
                            title: 'AlertContainer',
                            description: 'With Description and style',
                            style: 'Danger'
                        }" />
                    <AlertContainer
                        :alert="{
                            title: 'AlertContainer',
                            description: 'With Description and style (object)',
                            style: AlertStyle.Danger
                        }" />
                    <AlertContainer
                        :alert="{
                            title: 'AlertContainer',
                            description: 'With Description and close button',
                            style: 'Success',
                            closeBtn: true
                        }" />
                    <AlertContainer :alert="{ title: 'Alert description as slot' }">
                        <font-awesome-icon icon="triangle-exclamation" />
                        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit
                        <font-awesome-icon icon="triangle-exclamation" />
                    </AlertContainer>
                    <AlertContainer
                        :alert="{
                            title: 'Alert with both description',
                            description: 'Description not used'
                        }">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </AlertContainer>
                    <AlertContainer
                        :alert="{
                            title: 'Close button action',
                            description: 'Lorem Ipsum',
                            style: AlertStyle.Danger,
                            closeBtn: true
                        }"
                        @close="alertClosed()" />
                </UFCardBox>
            </div>

            <div>
                <UFCardBox title="Global Component">
                    <UFAlertContainer
                        :alert="{
                            title: 'UFAlertContainer',
                            description:
                                'This alert is created using the global component registration'
                        }" />
                </UFCardBox>
            </div>
        </div>
    </LayoutDashboard>
</template>
