const initState = [
    {
        id: 1, name: 'learn bà bắn ', completed: false, priority: 'High'
    },
    {
        id: 3, name: 'ccc ', completed: true, priority: 'Low'
    },
    {
        id: 6, name: 'yyyy', completed: false, priority: 'Medium'
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
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}

export default toDoListReducer