const initState = {
    search: '',
    status: "All",
    prioriry: []
}

const filterReducer = (state = initState, action) => {
    console.log("cccccc", state, action)
    switch (action.type) {
        case 'searchTodoList':
            return {
                ...state.search,
                search: action.payload
            };
        case 'searchWithStatus':
            return {
                ...state.status,
                status: action.payload
            }
        default:
            return state
    }
}

export default filterReducer;