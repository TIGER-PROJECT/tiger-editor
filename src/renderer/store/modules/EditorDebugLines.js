const state = {
    EditorDebugLines: []
};

const mutations = {
    addLine(line) {
        this.EditorDebugLines.push(line);
    }
};

const actions = {

};

export default {
    state,
    mutations,
    actions
};
