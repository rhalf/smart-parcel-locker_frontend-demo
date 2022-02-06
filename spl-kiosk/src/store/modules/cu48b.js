export default {
    state: {
        item : null
    },
    mutations: {
        setCu48b(state, item) {
            state.item = item;
        }
    },
    actions: {
        setCu48b(context, item) {
           context.commit('setCu48b', item);
        }
    },

    getters: {
        getCu48b : state => {
            return state.item;
        }
    }
}