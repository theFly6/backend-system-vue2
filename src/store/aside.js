export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        SHIFT_ISCOLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    state: {
        isCollapse: false
    },
}