export default {
    state: {
        items : []
    },
    mutations: {
        setLockers(state, items) {
            state.items = items;
        }
    },
    actions: {
        setLockers(context, items) {
           context.commit('setLockers', items);
        }
    },

    getters: {
        getLockers : state => {
            return state.items;
        },
        getLockerById : (state, id) => {
            for (let item in state.items)
                if (item.id == id)
                    return item;
        }
    }
}