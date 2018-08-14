const state = {
    EditorDebugLines: []
};

const mutations = {
    ADD_LINE(state, line) {
        state.EditorDebugLines.unshift(line);
    }
};

const actions = {
    addLine(store, line)
    {
        store.commit('ADD_LINE', line);
    }
};

const getters = {
    EditorDebugLines(state) {
        return state.EditorDebugLines;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
