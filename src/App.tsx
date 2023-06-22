import React, {useState, useEffect} from 'react';
import './styles/style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodoAction, removeActiveAction, removeCompletedAction, removeTodoAction, toggleTodoAction } from './store/action/todo';
import Input from './components/Input';
import TodoList from './components/TodoList';
import TodosInfoButtons from './components/TodosInfoButtons';

const App = () => {

  const [countTodos, setCountTodos] = useState<number>(0)

  const todos = useSelector((state: any) => state.todo.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const newCount = todos.reduce((count:any, item: { isDone: any; }) => {
      if (!item.isDone) return count + 1;
      return count
    }, 0)
    setCountTodos(newCount)
  }, [todos])
  
  const toggleTodo = (id: number) => {
    dispatch(toggleTodoAction(id));
  };

  const removeTodo = (id: number) => {
    dispatch(removeTodoAction(id));
  };

  const removeActiveTodos = () => {
    dispatch(removeActiveAction())
  }

  const removeCompletedTodos = () => {
    dispatch(removeCompletedAction())
  }

  const addTodo = (data: any) => {
    dispatch(addTodoAction(data));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    if (input && input.value && input.value.trim()) {
      const newTodo = {id: Date.now(), title: input.value.trim(), isDone: false}
      addTodo(newTodo);
      input.value = "";
    }
  };
  

  return (
    <div className='container'>
      <h1>TODO List</h1>
      <div className="content">
      <Input handleSubmit={handleSubmit}/>

      <TodoList removeTodo={removeTodo} todos={todos} toggleTodo={toggleTodo}/>

      {todos.length ? (
        <TodosInfoButtons todos={countTodos} removeActiveTodos={removeActiveTodos} removeCompletedTodos={removeCompletedTodos} />
      ) : <></>}
      </div>
    </div>
  );
}

export default App;
