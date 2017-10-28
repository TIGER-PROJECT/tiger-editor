<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <span>File</span>
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile v-for="item in menuItems" :key="item" @click="">
                        <v-list-tile-title v-text="item"></v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>settings</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                menuItems: [
                    'Open', 'Save', 'Save as', 'Close'
                ]
            };
        }
    };
</script>

<style>
</style>

