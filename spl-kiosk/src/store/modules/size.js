export default {
    state: {
        items : []
    },
    mutations: {
        setSizes(state, items) {
            state.items = items;
        }
    },
    actions: {
        setSizes(context, items) {
           context.commit('setSizes', items);
        }
    },

    getters: {
        getSizes : state => {
            return state.items;
        },
        getSizeById : (state, id )=> {
            for (let item in state.items)
                if (item.id == id)
                    return item;
        }
    }
}