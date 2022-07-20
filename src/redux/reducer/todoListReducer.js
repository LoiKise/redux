const initState = [
    {
        id: 1, name: 'learn bà bắn ', completed: false, priority: 'high'
    },
    {
        id: 3, name: 'ccc ', completed: true, priority: 'low'
    },
    {
        id: 6, name: 'yyyy', completed: false, priority: 'medium'
    },
]



const toDoListReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default toDoListReducer