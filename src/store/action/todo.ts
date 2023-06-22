import { TodoAction, TodoActionTypes } from "../../types/todo";


export const addTodoAction = (data: any) : TodoAction => {
    return {type: TodoActionTypes.ADD_TODO, payload: data}
}

export const toggleTodoAction = (id: number) : TodoAction => {
    return {type: TodoActionTypes.TOGGLE_TODO, payload: id}
}

export const removeTodoAction = (id: number) : TodoAction => {
    return {type: TodoActionTypes.REMOVE_TODO, payload: id}
}

export const removeActiveAction = () : TodoAction => {
    return {type: TodoActionTypes.REMOVE_ACTIVE, payload: null}
}

export const removeCompletedAction = () : TodoAction => {
    return {type: TodoActionTypes.REMOVE_COMPLETED, payload: null}
}
