import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../actions'

interface Props {
  showTrash: Function;
}

const Trash: React.FC<Props> = ({showTrash}) => {
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  const drop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
    const _id = event.dataTransfer.getData('_id')
    setId(_id)
  }

  const dragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
  }

  useEffect(() => {
    if (id !== '') {
      dispatch(deleteTodo(id))
      showTrash(false)
    }
  }, [id])

  return (
    <div
      className="trash"
      onDrop={drop}
      onDragOver={dragOver}
    >
      <h1>I`m a trash bin</h1>
    </div>
  )
}

export default Trash
