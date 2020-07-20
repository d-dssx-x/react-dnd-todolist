import {Todo, TodoTypes} from '../types'

const initS: Todo[] = [
  {
    title: 'dasda',
    date: '20 10',
    status: 'todo',
    id: '1',
  },
]

export const todoReducer = (state = initS, action: TodoTypes): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        id: Date.now().toString(),
        status: 'todo',
        date: new Date().toString().slice(0, 10),
      }]
    case 'CHANGE_STATUS':
      return state
          .map((el)=>el.id === action.values.id
          ? {...el, status: action.values.status}
          : el)
    case 'DELETE_TODO':
      return state.filter((el)=>el.id !== action.id)
    default: return state
  }
}
