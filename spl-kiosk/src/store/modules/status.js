export default {
    state: {
        items : []
    },
    mutations: {
        setStatus(state, items) {
            state.items = items;
        }
    },
    actions: {
        setStatus(context, items) {
           context.commit('setStatus', items);
        }
    },

    getters: {
        getStatus : state => {
            return state.items;
        }
    }
}