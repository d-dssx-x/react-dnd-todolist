import {StoreType} from '../types'

const KEY = 'react-todo-dnd'


const testState: StoreType = {
  todos: [
    {
      title: 'task 1',
      date: new Date().toString().slice(0, 10),
      status: 'todo',
      id: Date.now().toString(),
    },
  ],
}


export const loadState = (): StoreType => {
  try {
    const load = localStorage.getItem('react-todo-dnd')
    if (!load) {
      return testState
    }
    return JSON.parse(load)
  } catch (e) {
    console.log(e)
    return testState
  }
}

export const saveState = (state: StoreType): void => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch (e) {
    console.log(e)
  }
}
