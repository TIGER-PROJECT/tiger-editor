<template>
    <v-container fluid>
        <v-layout row wrap>

            <v-list>
                <template v-for="line in EditorDebugLines">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="line"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                inputContent: 'EditorConsole'
            };
        },
        computed: {
            EditorDebugLines() {
                return this.$store.getters.EditorDebugLines;
            }
        }
    };
</script>

<style>
</style>

