export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",

  REMOVE_ACTIVE = "REMOVE_ACTIVE",
  REMOVE_COMPLETED = "REMOVE_COMPLETED",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: any[];
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}

interface RemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO;
  payload: number;
}

interface RemoveActiveAction {
  type: TodoActionTypes.REMOVE_ACTIVE;
  payload: null;
}

interface RemoveCompletedAction {
  type: TodoActionTypes.REMOVE_COMPLETED;
  payload: null;
}



export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | RemoveTodoAction
  | RemoveActiveAction
  | RemoveCompletedAction
