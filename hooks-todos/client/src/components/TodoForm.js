import React, { useContext, useEffect, useState } from 'react'
import TodosContext from '../context'
import axios from 'axios'
import uuidv4 from 'uuid/v4'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { state: {currentTodo = {} }, dispatch } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    }
  }, [currentTodo.id])

  const handleSubmit = async event => {
    event.preventDefault()
    if (currentTodo.text) {
      const response = await axios.patch(`https://hooks-api-1aatn4e0c.now.sh/todos/${currentTodo.id}`, {
        text: todo
      })
      dispatch({ type: 'UPDATE_TODO', payload: response.data })
    } else {
      const response = await axios.post('https://hooks-api-1aatn4e0c.now.sh/todos', {
        id: uuidv4(),
        text: todo,
        complete: false
      } )
      dispatch({ type: 'ADD_TODO', payload: response.data })
    }
    setTodo('')
  }

  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input 
        onChange={event => setTodo(event.target.value)}
        type="text" 
        className="border-black border-solid border-2"
        value={todo}
      />
    </form>
  )
}