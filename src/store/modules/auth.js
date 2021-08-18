const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        //mutations.setToken; // do not do this
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};