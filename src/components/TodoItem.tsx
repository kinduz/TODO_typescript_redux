import React from "react";
import {BsTrash} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'

interface TodoItemProps {
  todo: { id: number; title: string; isDone: boolean };
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {

  
  

  return (
    <div className="todo__item" >
      <div className="todo__body">
      <div
        className={todo.isDone ? "completed__active completed" : "completed__unactive completed"}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.isDone && (
          <AiOutlineCheck color="#7bc1b1"/>
        )}
      </div>
      <span onClick={() => toggleTodo(todo.id)} className={todo.isDone ? 'title__active title' : 'title__unactive title'} >
        {todo.title}
        </span>
      </div>
      <button className="button__remove" onClick={() => removeTodo(todo.id)}><BsTrash/></button>
    </div>
  );
};

export default TodoItem;
