<template>
    <div class='checkbox-group'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LwCheckboxGroup',
        provide () {
            return {
                checkboxGroup: this
            }
        },
        props: {
            value: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>