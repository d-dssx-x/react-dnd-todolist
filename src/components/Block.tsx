import React, {ReactNode, DragEvent, useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import {changeStatus} from '../actions'
import {StoreType} from '../types'


interface Props {
  children: ReactNode;
  title: string;
  id: string;
  showTrash: Function;
}

const Block: React.FC<Props> = ({children, title, id, showTrash}) => {
  const [values, setValues] = useState({id: '', status: ''})
  const dispatch = useDispatch()
  const drop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
    const _id = event.dataTransfer.getData('_id')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: any = event.target
    setValues({id: _id, status: target.id})
  }

  const dragOver = (event: DragEvent): void => {
    event.preventDefault()
  }

  useEffect(() => {
    if (Object.entries(values).length !== 0) {
      dispatch(changeStatus(values))
      showTrash(false)
    }
  }, [values, dispatch])

  return (
    <div
      className="block"
      id={id}
      onDragOver={dragOver}
      onDrop={drop}
    >
      <h1 className="block__title">
        {title}
      </h1>
      {children}
    </div>
  )
}

const mapStateToProps = (state: StoreType): StoreType => {
  return {
    todos: state.todos,
  }
}


export default connect(mapStateToProps)(Block)
