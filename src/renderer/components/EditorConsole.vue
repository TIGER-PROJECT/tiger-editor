<!--suppress ALL -->
<template>
    <v-container grid-list-xs text-xs-center fluid>
        <v-layout row wrap>
            <v-flex xs12 sm12>
                <v-list dense v-chat-scroll>
                    <v-list-tile ripple v-for="(line, index) in lines" v-bind:key="index" @click="">
                        <v-list-tile-content transition="slide-y-transition">
                            <v-container grid-list-md text-xs-center fluid>
                                <v-layout align-center>
                                    <v-flex xs2 lg1 align-content-start text-xs-left>
                                        <v-chip label>Label</v-chip>
                                    </v-flex>
                                    <v-flex xs10 lg11 align-end>
                                        <v-list-tile-title v-text="line"></v-list-tile-title>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-list-tile-content>
                        <!--<v-divider v-if="index !== 0 && index < lines.length"></v-divider>-->
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data () {
            return {};
        },
        computed  : {
            ...mapGetters({
                lines: 'EditorDebugLines'
            })
        }
    };
</script>

<style scoped>
    .fluid {
        width: 100%;
    }
</style>

