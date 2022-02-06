export default {
    state: {
        items : []
    },
    mutations: {
        setCouriers(state, items) {
            state.items = items;
        }
    },
    actions: {
        setCouriers(context, items) {
           context.commit('setCouriers', items);
        }
    },

    getters: {
        getCouriers : state => {
            return state.items;
        }
    }
}