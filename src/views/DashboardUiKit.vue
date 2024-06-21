<!-- 
 This page is used to test UIKit embed images
 @see : https://github.com/uikit/uikit/issues/5024 
-->
<template>
    <div class="uk-child-width-1-1" uk-grid>
        <div>
            <UFCardBox title="Divider Icon">
                <hr class="uk-divider-icon" />
            </UFCardBox>
        </div>

        <div>
            <UFCardBox title="Accordion">
                <ul uk-accordion>
                    <li class="uk-open">
                        <a class="uk-accordion-title" href="#">Item 1</a>
                        <div class="uk-accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                    <li>
                        <a class="uk-accordion-title" href="#">Item 2</a>
                        <div class="uk-accordion-content">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                        </div>
                    </li>
                    <li>
                        <a class="uk-accordion-title" href="#">Item 3</a>
                        <div class="uk-accordion-content">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </li>
                </ul>
            </UFCardBox>
        </div>

        <div>
            <UFCardBox title="Image bullet modifier">
                <ul class="uk-list uk-list-bullet">
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
            </UFCardBox>
        </div>

        <div>
            <UFCardBox title="Form">
                <form>
                    <fieldset class="uk-fieldset">

                        <legend class="uk-legend">Legend</legend>

                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Input" aria-label="Input">
                        </div>

                        <div class="uk-margin">
                            <select class="uk-select" aria-label="Select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>

                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
                        </div>

                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                            <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
                            <label><input class="uk-radio" type="radio" name="radio2"> B</label>
                        </div>

                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                            <label><input class="uk-checkbox" type="checkbox" checked> A</label>
                            <label><input class="uk-checkbox" type="checkbox"> B</label>
                        </div>

                        <div class="uk-margin">
                            <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1" aria-label="Range">
                        </div>

                    </fieldset>
                </form>
            </UFCardBox>
        </div>
    </div>
</template>
