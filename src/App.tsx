import React, {useState} from 'react'

// Input field to create new Todo
import InputForm from './components/InputForm'

import Block from './components/Block'

import ToDo from './components/ToDo'

// Todo interface
import {Todo, AddTodoAction} from './types/index'

import {StoreType} from './types'

import {connect, useDispatch} from 'react-redux'

import {addTodo} from './actions'
import Trash from './components/Trash'

interface Props {
  todos: Array<Todo>;
}


const App: React.FC<Props> = ({todos}) => {
  const [blocks, setBlocks] = useState(['todo', 'done'])
  const [showTrash, setShowTrash] = useState(false)
  const dispatch = useDispatch()

  const addNewTodo = (title: string): AddTodoAction => {
    return dispatch(addTodo(title))
  }

  const showTrashHandler = (flag: boolean): void => {
    return setShowTrash(flag)
  }

  return (
    <div className="container">
      <InputForm
        onPress={addNewTodo}/>
      <div className="blocks-row">
        <Block
          title={'Todo'}
          id={blocks[0]}
          showTrash={showTrashHandler}
        >
          {todos.map((el)=>{
            if (el.status === blocks[0]) {
              return <ToDo
                key={el.id}
                title={el.title}
                id={el.id}
                date={el.date}
                draggable={true}
                showTrash={showTrashHandler}
              />
            }
          })}
        </Block>
        <Block
          title={'Done'}
          id={blocks[1]}
          showTrash={showTrashHandler}
        >
          {todos.map((el)=>{
            if (el.status === blocks[1]) {
              return <ToDo
                key={el.id}
                title={el.title}
                id={el.id}
                date={el.date}
                draggable={true}
                showTrash={showTrashHandler}
              />
            }
          })}

        </Block>
        {showTrash && <Trash showTrash={showTrashHandler} />}
      </div>
    </div>
  )
}

const mapStateToProps = (state: StoreType): StoreType=> {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(App)
