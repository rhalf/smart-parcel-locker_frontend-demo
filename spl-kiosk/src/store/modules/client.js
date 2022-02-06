export default {
    state: {
        items : []
    },
    mutations: {
        setClients(state, items) {
            state.items = items;
        }
    },
    actions: {
        setClients(context, items) {
           context.commit('setClients', items);
        }
    },

    getters: {
        getClients : state => {
            return state.items;
        }
    }
}