const initState = {
    search: '',
    status: "All",
    priorities: []
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'searchTodoList':
            return {
                ...state,
                search: action.payload
            };
        case 'statusSearch':
            return {
                ...state,
                status: action.payload
            }
        case 'prioritySearch':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }
}

export default filterReducer;