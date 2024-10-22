<template>
    <h1>Font Awesome</h1>
    <p>Test Custom Font Awesome Component and CSS.</p>
    <UFCardBox>
        <h3>Form</h3>
        <fieldset class="uk-fieldset uk-form-stacked">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Font Awesome Icon</label>
                <div class="uk-inline uk-width-1-1">
                    <font-awesome-icon class="fa-form-icon" icon="fa-regular fa-user" />
                    <input class="uk-input" type="text" placeholder="Name" />
                </div>
                <div class="uk-inline uk-width-1-1">
                    <font-awesome-icon class="fa-form-icon" icon="user-group" />
                    <input class="uk-input" type="text" placeholder="Group" />
                </div>
                <div class="uk-inline uk-width-1-1">
                    <font-awesome-icon class="fa-form-icon" icon="icons" />
                    <input class="uk-input" type="text" placeholder="Icon" />
                </div>
                <div class="uk-inline uk-width-1-1">
                    <font-awesome-icon class="fa-form-icon" icon="edit" />
                    <input class="uk-input" type="text" placeholder="Edit Name" />
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">UiKit Icon (Reference)</label>
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="text" placeholder="Name" />
                </div>
            </div>
        </fieldset>
    </UFCardBox>
</template>
