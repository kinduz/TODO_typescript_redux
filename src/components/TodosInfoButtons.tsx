import React from 'react'

interface TodosInfoButtonsProps {
    todos: number,
    removeActiveTodos: () => void,
    removeCompletedTodos: () => void,
}

const TodosInfoButtons: React.FC<TodosInfoButtonsProps> = ({removeActiveTodos, removeCompletedTodos, todos}) => {
  return (
    <div className="info__buttons">
          <span>{todos} left</span>
          <div className="buttons">
            <button onClick={removeActiveTodos}>Clear Active</button>
            <button onClick={removeCompletedTodos}>Clear Completed</button>
          </div>
    </div>
  )
}

export default TodosInfoButtons