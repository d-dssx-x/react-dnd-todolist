import {ADD_TODO, CHANGE_STATUS, DELETE_TODO} from '../constants'
import {AddTodoAction, ChangeStatus, DeleteTodo} from '../types'


export const addTodo = (title: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    title: title,
  }
}

export const
  changeStatus = (values: {id: string; status: string}): ChangeStatus => {
    return {
      type: CHANGE_STATUS,
      values: values,
    }
  }

export const deleteTodo = (id: string): DeleteTodo => {
  return {
    type: DELETE_TODO,
    id: id,
  }
}
