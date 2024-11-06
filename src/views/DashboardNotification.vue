<script setup lang="ts">
import UIkit from 'uikit'

const status: Array<'primary' | 'success' | 'warning' | 'danger' | undefined> = [
    'primary',
    'success',
    'danger',
    'warning',
    undefined
]

const displayNotification = (
    severity: 'primary' | 'success' | 'warning' | 'danger' | undefined
) => {
    UIkit.notification({
        message: 'This is a <strong>' + severity + '</strong> notification message example',
        status: severity,
        pos: 'top-right',
        timeout: 0
    })
}

const openAll = () => {
    status.forEach((stat) => {
        displayNotification(stat)
    })
}

const closeAll = () => {
    // @ts-ignore
    UIkit.notification.closeAll()
}

const buttonClass = (stat: 'primary' | 'success' | 'warning' | 'danger' | undefined) => {
    return stat === undefined ? 'uk-button-secondary' : 'uk-button uk-button-' + stat
}
</script>

<template>
    <div class="uk-margin">
        <UFCardBox>
            <p>Display custom notification style</p>
            <ul class="uk-list">
                <li v-for="(stat, index) in status" :key="index">
                    <button
                        class="uk-button uk-button-primary"
                        :class="buttonClass(stat)"
                        @click="displayNotification(stat)">
                        {{ stat ?? 'undefined' }}
                    </button>
                </li>
                <hr />
                <li>
                    <button class="uk-button uk-button-success" @click="openAll()">Open All</button>
                    <button class="uk-button uk-button-danger" @click="closeAll()">
                        Close All
                    </button>
                </li>
            </ul>
        </UFCardBox>
    </div>
</template>
