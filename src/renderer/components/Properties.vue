<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-form>
                <v-text-field
                        label="Content"
                        v-model="inputContent"
                ></v-text-field>
                <button @click="addLine">Add line</button>
            </v-form>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                inputContent: 'my line'
            };
        },
        methods: {
            addLine () {
                this.$store.dispatch('addLine', this.inputContent);
            }
        }
    };
</script>

<style>
</style>

