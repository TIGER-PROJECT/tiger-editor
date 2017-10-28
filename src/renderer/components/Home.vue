<template>
    <golden-layout ref="layout"></golden-layout>
</template>

<script>
    import goldenLayout from './GoldenLayout.vue';

    export default {
        components: {
            goldenLayout
        },
        mounted () {
            this.$refs.layout.init();
        }
    };
</script>

<style></style>

