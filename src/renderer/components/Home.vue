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

<style>
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px #424242;
        border-radius: 10px;
        background-color: #424242;
    }

    ::-webkit-scrollbar
    {
        width: 12px;
        background-color: #424242;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius: 2px;
        background-color: #212121;
    }
</style>

