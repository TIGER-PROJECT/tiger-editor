const state = {
    modals: {
        'about': false
    }
};

const mutations = {
    SHOW_DIALOG (state, payload) {
        state.modals[ payload.modal ] = payload.show;
    }
};

const actions = {
    showDialog (store, payload) {
        console.log('Showing dialog :', payload);
        store.commit('SHOW_DIALOG', payload);
    }
};

const getters = {
    modals: (state) => state.modals
};

export default {
    state,
    mutations,
    actions,
    getters
};
