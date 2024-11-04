<script setup lang="ts">
import { ref } from 'vue'
import UIkit from 'uikit'
import { Severity } from '@userfrosting/sprinkle-core/types'

const showAlert = (
    message: string,
    status: 'primary' | 'success' | 'warning' | 'danger' | undefined = 'primary'
) => {
    UIkit.notification({
        message: message,
        status: status,
        pos: 'top-right',
        timeout: 1000
    })
}

const saveButtonClicked = (element: string) => {
    UIkit.notification({
        message: 'Save button of ' + element + ' was clicked',
        status: 'warning',
        pos: 'top-right',
        timeout: 1000
    })
    UIkit.toggle(element)
}

const prompt1 = ref<string>('')
const prompt2 = ref<string>('')
const prompt3 = ref<string>('John Doe')

const lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
</script>

<template>
    <div class="uk-margin">
        <UFCardBox>
            <h3 class="uk-heading-divider">Modals</h3>

            <!-- Default Modal -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #modal-example-1">
                    Show Complete Modal
                </button>
            </p>
            <UFModal
                id="modal-example-1"
                @show="showAlert('Modal 1 is shown')"
                @hidden="showAlert('Modal 1 is hidden')"
                closable>
                <template #header>Complete Modal</template>
                <template #footer>
                    <button class="uk-button uk-button-default uk-modal-close" type="button">
                        Cancel
                    </button>
                    <button
                        class="uk-button uk-button-primary"
                        type="button"
                        @click="saveButtonClicked('#modal-example-1')">
                        Save
                    </button>
                </template>
                <p>{{ lorem }}</p>
            </UFModal>

            <!-- With no header or buttons -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #modal-example-2">
                    Show Simple Modal
                </button>
            </p>
            <UFModal
                id="modal-example-2"
                @show="showAlert('Modal 2 is shown')"
                @hidden="showAlert('Modal 2 is hidden')">
                {{ lorem }}
            </UFModal>

            <!-- With no header or buttons -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #modal-example-3">
                    Show No Background Close Modal
                </button>
            </p>
            <UFModal
                id="modal-example-3"
                @show="showAlert('Modal 3 is shown')"
                @hidden="showAlert('Modal 3 is hidden')"
                :bgClose="false"
                :escClose="false"
                closable>
                {{ lorem }}
                <template #footer>
                    <button class="uk-button uk-button-primary uk-modal-close" type="button">
                        Ok
                    </button>
                </template>
            </UFModal>
        </UFCardBox>
    </div>
    <div class="uk-margin">
        <UFCardBox>
            <h3 class="uk-heading-divider">Confirmation</h3>

            <!-- Default Confirmation -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-1">
                    Show Simple Confirmation
                </button>
            </p>
            <UFModalConfirmation
                id="confirm-example-1"
                closable
                @show="showAlert('Confirmation modal is shown')"
                @hide="showAlert('Confirmation modal is hidden')"
                @cancelled="showAlert('Cancelled !', 'danger')"
                @confirmed="showAlert('Confirmed !', 'success')" />

            <!-- No Background Click -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-2">
                    Show Trapped Confirmation
                </button>
            </p>
            <UFModalConfirmation
                id="confirm-example-2"
                @show="showAlert('Confirmation modal is shown')"
                @hide="showAlert('Confirmation modal is hidden')"
                @cancelled="showAlert('Cancelled !', 'danger')"
                @confirmed="showAlert('Confirmed !', 'success')"
                :bgClose="false"
                :escClose="false" />

            <!-- Customized confirmation -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-3">
                    Show Customized Confirmation
                </button>
            </p>
            <UFModalConfirmation
                id="confirm-example-3"
                icon="skull-crossbones"
                acceptIcon="circle-check"
                rejectIcon="circle-xmark"
                acceptLabel="Yes"
                rejectLabel="No"
                title="Dangerous Action"
                prompt="Are you sure you want to delete this item ?" />

            <!-- Removed optional props -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-4">
                    Show Trimmed Down Confirmation
                </button>
            </p>
            <UFModalConfirmation
                id="confirm-example-4"
                :icon="null"
                :acceptIcon="null"
                :rejectIcon="null"
                :cancelBtn="false"
                :title="null" />

            <!-- Slot content -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-5">
                    Show Confirmation with Slot
                </button>
            </p>
            <UFModalConfirmation id="confirm-example-5">
                <template #header>
                    <font-awesome-icon icon="exclamation-triangle" class="uk-text-warning" />
                    Warning
                </template>
                <p>This is a warning message. Please confirm to proceed.</p>
                <template #footer>
                    <button class="uk-button uk-button-primary uk-modal-close" type="button">
                        Ok
                    </button>
                </template>
            </UFModalConfirmation>

            <!-- Danger Example -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #confirm-example-6">
                    Show Delete Confirmation example
                </button>
            </p>
            <UFModalConfirmation
                id="confirm-example-6"
                title="Delete Group ?"
                prompt="Are your sure you want to delete this group ?"
                acceptLabel="Yes, Delete Group"
                acceptIcon="trash"
                :rejectIcon="null"
                :acceptSeverity="Severity.Danger" />
        </UFCardBox>
    </div>
    <div class="uk-margin">
        <UFCardBox>
            <h3 class="uk-heading-divider">Alert</h3>

            <!-- Default Alert -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #alert-example-1">
                    Show Simple Alert
                </button>
            </p>
            <UFModalAlert
                id="alert-example-1"
                @show="showAlert('Alert modal is shown')"
                @hide="showAlert('Alert modal is hidden')" />

            <!-- Alert with Props -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #alert-example-2">
                    Show Alert with Props
                </button>
            </p>
            <UFModalAlert
                id="alert-example-2"
                btnLabel="I get it"
                title="I want a title"
                prompt="Will you give me a title?" />

            <!-- Alert with Slot -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #alert-example-3">
                    Show Alert with Slot
                </button>
            </p>
            <UFModalAlert id="alert-example-3">
                <template #header>
                    <font-awesome-icon icon="exclamation-triangle" class="uk-text-warning" />
                </template>
                <div class="uk-text-center">
                    <p><font-awesome-icon icon="hippo" class="uk-text-danger fa-4x" /></p>
                    <p>This is your last warning !</p>
                </div>
                <template #footer>
                    <button class="uk-button uk-button-danger uk-modal-close" type="button">
                        Ok, ok...
                    </button>
                </template>
            </UFModalAlert>
        </UFCardBox>
    </div>
    <div class="uk-margin">
        <UFCardBox>
            <h3 class="uk-heading-divider">Prompt</h3>

            <!-- Empty Prompt -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #prompt-example-1">
                    Show empty Prompt
                </button>
            </p>
            <UFModalPrompt
                id="prompt-example-1"
                v-model="prompt1"
                @hide="showAlert('Prompt 1: ' + prompt1)" />

            <!-- Complete Prompt -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #prompt-example-2">
                    Show Complete Prompt
                </button>
            </p>
            <UFModalPrompt
                id="prompt-example-2"
                title="New Group"
                prompt="Please enter a name for the new group :"
                placeholder="My New Group"
                btnLabel="Save"
                v-model="prompt2"
                @show="prompt2 = ''"
                @hide="showAlert('Prompt result : ' + prompt2)" />

            <!-- Prompt -->
            <p>
                <button
                    class="uk-button uk-button-primary"
                    type="button"
                    uk-toggle="target: #prompt-example-3">
                    Show Prompt with Events
                </button>
            </p>
            <UFModalPrompt
                id="prompt-example-3"
                prompt="Please confirm your name :"
                v-model="prompt3"
                @hide="showAlert('Prompt result : ' + prompt3)" />
        </UFCardBox>
    </div>
</template>
