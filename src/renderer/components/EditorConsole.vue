<template>
    <v-container fluid>
        <v-layout row wrap>
            <template v-for="(line, index) in lines">
                <div>
                    <v-chip label>Label</v-chip>
                    <p>{{ line }}</p>
                </div>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data () {
            return {
                inputContent: 'EditorConsole'
            };
        },
        computed: {
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

