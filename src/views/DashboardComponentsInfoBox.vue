<template>
    <h3>Info box with FA Icons</h3>
    <div class="uk-grid uk-child-width-1-3" uk-grid>
        <div>
            <UFInfoBox value="123" label="Users" faIcon="user" />
        </div>
        <div>
            <UFInfoBox value="4" label="Roles" faIcon="address-card" />
        </div>
        <div>
            <UFInfoBox value="23" label="Groups" faIcon="users" />
        </div>
    </div>

    <h3>Info box with UiKit Icons</h3>
    <div class="uk-grid uk-child-width-1-3" uk-grid>
        <div>
            <UFInfoBox value="123" label="Users" icon="user" />
        </div>
        <div>
            <UFInfoBox value="4" label="Roles" icon="lock" />
        </div>
        <div>
            <UFInfoBox value="23" label="Groups" icon="users" />
        </div>
    </div>

    <h3>Info box with Missing value</h3>
    <div class="uk-grid uk-child-width-1-3" uk-grid>
        <div>
            <UFInfoBox label="Users" faIcon="user" />
        </div>
        <div>
            <UFInfoBox value="4" faIcon="address-card" />
        </div>
        <div>
            <UFInfoBox value="23" label="Groups" />
        </div>
    </div>
</template>
