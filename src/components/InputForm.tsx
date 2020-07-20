import React, {useState} from 'react'

interface Props {
  // This callback to add a new task to the todolist array
  onPress(title: string): void;
}

const InputForm: React.FC<Props> = ({onPress}) => {
  const [title, setTitle] = useState<string>('')

  const onChageHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    return setTitle(event.target.value)
  }

  const onKeyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      onPress(title)
      return setTitle('')
    }
  }

  return (
    <input
      placeholder="Enter a new Todo"
      value={title}
      onChange={onChageHandler}
      onKeyPress={onKeyPressHandler}
      className="input"/>
  )
}


export default InputForm
