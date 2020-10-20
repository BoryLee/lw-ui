<template>
    <div class="lw-form">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LwForm',
        props: {
            model: {
                type: Object,
                required: true
            }
        },
        provide () {
            return {
                form: this
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>