<template>
    <v-container fluid>
        <v-layout row wrap>

            <vue-tree-list
                    :model="data"
                    default-tree-node-name="new node"
                    default-leaf-node-name="new leaf">
            </vue-tree-list>

        </v-layout>
    </v-container>
</template>

<script>
    import { VueTreeList, Tree, TreeNode } from 'vue-tree-list';

    export default {
        components: {
            VueTreeList
        },
        data () {
            return {
                newTree: {},
                data   : new Tree([
                    {
                        name    : 'Node 1',
                        id      : 1,
                        pid     : 0,
                        children: [
                            {
                                name  : 'Node 1-2',
                                id    : 2,
                                isLeaf: true,
                                pid   : 1
                            }
                        ]
                    },
                    {
                        name: 'Node 2',
                        id  : 3,
                        pid : 0
                    },
                    {
                        name: 'Node 3',
                        id  : 4,
                        pid : 0
                    }
                ])
            };
        },
        methods   : {
            addNode: function () {
                let node = new TreeNode('new node', false);
                if (!this.data.children) {
                    this.data.children = [];
                }
                this.data.addChildren(node);
            },

            getNewTree: function () {
                const vm = this;

                function _dfs (oldNode) {
                    let newNode = {};

                    newNode.name   = oldNode.name;
                    newNode.pid    = oldNode.pid;
                    newNode.isLeaf = oldNode.isLeaf;
                    newNode.id     = oldNode.id;

                    if (oldNode.children && oldNode.children.length > 0) {
                        newNode.children = [];
                        for (let i = 0, len = oldNode.children.length; i < len; i++) {
                            newNode.children.push(_dfs(oldNode.children[ i ]));
                        }
                    }
                    return newNode;
                }

                vm.newTree = _dfs(vm.data);
            }
        }
    };
</script>

<style>
</style>

