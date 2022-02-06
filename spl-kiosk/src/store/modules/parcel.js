export default {
    state: {
        items : []
    },
    mutations: {
        setParcels(state, items) {
            state.items = items;
        }
    },
    actions: {
        setParcels(context, items) {
           context.commit('setParcels', items);
        }
    },

    getters: {
        getParcels : state => {
            return state.items;
        }
    }
}