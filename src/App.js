import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todo, setTodo] = useState([]);

  function handleChange(text) {
    setTodo([...todo, text]);
  }

  function deleteTodoHandler(index) {
    setTodo(todo.filter((item, idx) => idx !== index));
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={handleChange} />
      <TodoList todo={todo} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
