<template>
    <div class='radio-group'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LwRadioGroup',
        provide () {
            return {
                radioGroup: this
            }
        },
        props: {
            value: null
        }
    }
</script>

<style lang="scss" scoped>

</style>