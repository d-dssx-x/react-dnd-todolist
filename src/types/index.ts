import {ADD_TODO, CHANGE_STATUS, DELETE_TODO} from '../constants'

export interface Todo {
  title: string;
  date: string;
  id: string;
  status?: string;
}


export interface StoreType {
  todos: Todo[];
}


export interface AddTodoAction {
  type: typeof ADD_TODO;
  title: string;
}

export interface ChangeStatus {
  type: typeof CHANGE_STATUS;
  values: {
    id: string;
    status: string;
  };
}

export interface DeleteTodo {
  type: typeof DELETE_TODO;
  id: string;
}

export type TodoTypes = AddTodoAction | ChangeStatus | DeleteTodo
