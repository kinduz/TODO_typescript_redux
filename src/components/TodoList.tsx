import React from 'react'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: {id:number, title: string, isDone: boolean}[],
    toggleTodo: (id:number) => void,
    removeTodo: (id: number) => void,
}

const TodoList: React.FC<TodoListProps> = ({removeTodo,  todos, toggleTodo}) => {
  return (
    <div className='todo__list'>
      {todos.map(todo => 
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
      )}
    </div>
  )
}

export default TodoList