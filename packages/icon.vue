<template>
    <i :class="'lw-icon-' + name"></i>
</template>

<script>
    export default {
        name: 'LwIcon',
        props: {
            name: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>