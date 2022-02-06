export default {
    state: {
        items : []
    },
    mutations: {
        setCompanies(state, items) {
            state.items = items;
        }
    },
    actions: {
        setCompanies(context, items) {
           context.commit('setCompanies', items);
        }
    },

    getters: {
        getCompanies : state => {
            return state.items;
        }
    }
}