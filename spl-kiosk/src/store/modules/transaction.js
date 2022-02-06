export default {
    state: {
        items : []
    },
    mutations: {
        setTransactions(state, items) {
            state.items = items;
        }
    },
    actions: {
        setTransactions(context, items) {
           context.commit('setTransactions', items);
        }
    },

    getters: {
        getTransactions : state => {
            return state.items;
        }
    }
}