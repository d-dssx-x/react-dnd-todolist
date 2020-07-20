import React from 'react'
import {Todo} from '../types'

interface Props extends Todo {
  draggable: boolean;
  showTrash: Function;
}

const ToDo: React.FC<Props> = (
    {title, date, id, draggable, showTrash}) => {
  const dragStart = (event: React.DragEvent<HTMLDivElement>): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: any = event.target
    event.dataTransfer?.setData('_id', target.id)
    showTrash(true)
  }

  const dragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.stopPropagation()
  }

  return (
    <div
      className="todo"
      id={id}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={(): void => showTrash(false)}
    >
      <h2>{title}</h2>
      <time>{date}</time>
    </div>
  )
}

export default ToDo
