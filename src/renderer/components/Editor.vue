<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-form>
                <v-text-field
                        label="Content"
                        v-model="inputContent"
                ></v-text-field>
            </v-form>
            <p>{{ inputContent }}</p>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                inputContent: 'Editor'
            };
        }
    };
</script>

<style>
</style>

