<template>
    <div class="uk-child-width-1-4" uk-grid>
        <div class="uk-width-1-1">
            <!-- Card without title -->
            <UFCardBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna.
                In hac habitasse platea dictumst quisque sagittis purus. Ac felis donec et odio
                pellentesque diam volutpat commodo sed. Rhoncus dolor purus non enim praesent.
                Aliquet bibendum enim facilisis gravida neque convallis a cras. Sed vulputate odio
                ut enim blandit volutpat maecenas. A diam sollicitudin tempor id eu nisl nunc mi.
                Sed nisi lacus sed viverra tellus in. Vestibulum morbi blandit cursus risus at
                ultrices mi tempus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit
                amet. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Scelerisque varius
                morbi enim nunc. Sagittis vitae et leo duis ut diam quam nulla porttitor. Amet risus
                nullam eget felis eget nunc lobortis mattis. Amet mattis vulputate enim nulla
                aliquet porttitor lacus luctus. Vitae proin sagittis nisl rhoncus mattis rhoncus
                urna neque. Placerat orci nulla pellentesque dignissim enim.
            </UFCardBox>
        </div>
        <div>
            <UFCardBox title="Box 1">Lorem ipsum dolor sit amet</UFCardBox>
        </div>
        <div>
            <UFCardBox>
                <template #header>Box 2</template>
                Lorem ipsum dolor sit amet
            </UFCardBox>
        </div>
        <div>
            <UFCardBox>
                <template #header>
                    <font-awesome-icon :icon="['far', 'snowflake']" /> Box 3
                </template>
                Lorem ipsum dolor sit amet
            </UFCardBox>
        </div>
        <div>
            <UFCardBox>
                <template #header>Box 4</template>
                Lorem ipsum dolor sit amet
                <template #footer>Footer</template>
            </UFCardBox>
        </div>
    </div>

    <div class="uk-child-width-1-1" uk-grid>
        <div>
            <UFCardBoxBig>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna.
            </UFCardBoxBig>
        </div>
        <div>
            <UFCardBoxBig title="Big Box 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna.
            </UFCardBoxBig>
        </div>
        <div>
            <UFCardBoxBig>
                <template #header>Big Box 3</template>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna.
                <template #footer>Footer</template>
            </UFCardBoxBig>
        </div>
    </div>
</template>
