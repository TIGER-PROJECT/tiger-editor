<template>
    <v-app :dark="theme">
        <!--<v-system-bar window >
            <v-spacer></v-spacer>
            <v-icon>remove</v-icon>
            <v-icon>check_box_outline_blank</v-icon>
            <v-icon>close</v-icon>
        </v-system-bar>-->

        <window-menu></window-menu>

        <v-dialog v-model="showAbout" max-width="600px" persistent>
            <v-card>
                <v-card-media src="static/img/tiger.png" contain height="100px"></v-card-media>
                <v-card-title class="headline">TIGERR Editor</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a
                            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
                            href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                            target="_blank">CC 3.0 BY</a>
                    </v-card-text>
                    <v-btn color="blue darken-1"
                           @click.native="$store.dispatch('showDialog', {modal:'about', show:false })">Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <router-view></router-view>
    </v-app>
</template>

<script>
    import WindowMenu from './components/WindowMenu.vue';

    export default {
        name      : 'tiger-editor',
        components: {
            WindowMenu
        },
        data () {
            return {};
        },
        computed  : {
            theme () {
                return 'dark';
                return this.$store.getters.getAppTheme();
            },
            showAbout () {
                return this.$store.getters.modals[ 'about' ];
            }
        }
    };
</script>

<style>
    .lm_goldenlayout {
        height: 100vh !important;
        width: 100vw !important;
        color: #ffffff !important;
    }

    html {
        overflow: hidden !important;
    }
</style>
