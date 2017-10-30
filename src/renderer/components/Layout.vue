<template>
    <div>
        <div v-if="this.$store.getters.projectLoaded">
            <fabricjs-canvas ref="canvas" :zoom="canvasZoom" :width="canvasWidth"
                             :height="canvasHeight"></fabricjs-canvas>

            <div class="bottom-left-canvas">
                <span id="zoom-level">Zoom : {{ Math.round(canvasZoom * 100) }}%</span>
                <span id="mouse-pos">X: 0, Y: 0</span>
                <span id="selection-pos">X: 0, Y: 0</span>
            </div>
        </div>
        <div v-else>
            <v-container fluid fill-height>
                <v-layout>
                    <p>No projects loaded</p>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
    const LEFT_CLICK   = 1;
    const MIDDLE_CLICK = 2;
    const RIGHT_CLICK  = 3;

    import FabricjsCanvas from './FabricCanvas.vue';

    export default {
        data () {
            return {
                canvasZoom  : 1,
                canvasWidth : 800,
                canvasHeight: 600
            };
        },
        components: {
            FabricjsCanvas
        },
        mounted () {
            this.$store.dispatch('addLine', 'Editor Loaded');
        },
        methods   : {}
    };
</script>

<style>
    #currentCanvas {
        outline: 2px dashed grey;
        outline-offset: 5px;
    }

    .bottom-left-canvas {
        mix-blend-mode: difference;
        position: absolute;
        bottom: 0;
        right: 0;
    }

</style>

