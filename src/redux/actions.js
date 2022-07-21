/* 
    * action là một object hoặc là một action createtors (được viết dưới dạng một function)
    * action nhận vào hai tham số
    * 1 là type tương ứng vs cái tên action tính năng mà mình làm
    * 2 payload:
*/

export const addToDo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const searchTodoList = (text) => {
    return {
        type: 'searchTodoList',
        payload: text
    }
}

export const statusSearch = (status) => {
    return {
        type: 'statusSearch',
        payload: status
    }
}

export const prioritySearch = (priorities) => {
    return {
        type: 'prioritySearch',
        payload: priorities
    }
}