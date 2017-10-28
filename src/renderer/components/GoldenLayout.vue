<template>
    <div>
        <div id="golden-layout"></div>

        <top-menu id="menu"></top-menu>

        <objects-list id="objects"></objects-list>
        <layout ref="layout" id="layout"></layout>
        <editor id="editor"></editor>
        <preview id="preview"></preview>
        <editor-console id="editor-console"></editor-console>
        <game-console id="game-console"></game-console>
        <properties id="properties"></properties>
    </div>
</template>

<script>
    import fs from 'fs';

    import * as GoldenLayout from 'golden-layout';
    import config from '../config/layout.json';

    import TopMenu from './Menu.vue';
    import ObjectsList from './ObjectsList.vue';
    import Layout from './Layout.vue';
    import Editor from './Editor.vue';
    import Preview from './Preview.vue';
    import EditorConsole from './EditorConsole.vue';
    import GameConsole from './GameConsole.vue';
    import Properties from './Properties.vue';

    export default {
        name      : 'golden-layout',
        components: {
            ObjectsList,
            Layout,
            Editor,
            Preview,
            EditorConsole,
            GameConsole,
            Properties,
            TopMenu
        },
        methods   : {
            init () {
                const layout = new GoldenLayout(config, $('#golden-layout'));

                layout.registerComponent('Objects', (container, state) => {
                    container.getElement().html($('#objects'));
                });

                layout.registerComponent('Layout', (container, state) => {
                    container.getElement().html($('#layout'));
                });

                layout.registerComponent('Editor', (container, state) => {
                    container.getElement().html($('#editor'));
                });

                layout.registerComponent('Preview', (container, state) => {
                    container.getElement().html($('#preview'));
                });

                layout.registerComponent('EditorConsole', (container, state) => {
                    container.getElement().html($('#editor-console'));
                });

                layout.registerComponent('GameConsole', (container, state) => {
                    container.getElement().html($('#game-console'));
                });

                layout.registerComponent('Menu', (container, state) => {
                    container.getElement().html($('#menu'));
                });

                layout.registerComponent('Properties', (container, state) => {
                    container.getElement().html($('#properties'));
                });

                layout.init();

                layout.updateSize();

                window.addEventListener('resize', () => {
                    layout.updateSize();
                });

                layout.on('stateChanged', () => {
                    let state = JSON.stringify(layout.toConfig(), null, '\t');
                    //fs.writeFileSync('src/renderer/config/layout.json', state, 'utf8');
                });

            }
        }
    };
</script>

<style scoped>
    p {
        color: #ffffff !important;
    }

    #layout {
        width: 100%;
        height: 100%;
    }
</style>

