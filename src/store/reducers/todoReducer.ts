import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
    todos: [],
}


export const todoReducer = (state = initialState, action: TodoAction) => {
    switch(action.type) {
        case TodoActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload ]}
        case TodoActionTypes.REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case TodoActionTypes.TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)}
        case TodoActionTypes.REMOVE_ACTIVE:
            return { ...state, todos: state.todos.filter(todo => todo.isDone) };
        case TodoActionTypes.REMOVE_COMPLETED:
            return { ...state, todos: state.todos.filter(todo => !todo.isDone) };
        default:
            return state;
    }
}