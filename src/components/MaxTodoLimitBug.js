import React, { useState } from 'react';

const MaxTodoLimitBug = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [checkedTodos, setCheckedTodos] = useState({});

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTodoValue(inputValue);
  };

  const addTodo = () => {
    if (todoValue.trim() === '') {
      alert('Please enter a todo text.');
      return; // Exit early if input is empty
    }

    if (todos.length >= 8) {
      // Optionally, you can provide a message or take any action when the maximum limit is reached
      alert('Maximum todo limit reached.');
      return; // Exit early if maximum limit is reached
    }

    const newId = Math.max(...todos.map(todo => todo.id), 0) + 1;
    const newTodo = { id: newId, text: todoValue };

    setTodos([...todos, newTodo]);
    setCheckedTodos({ ...checkedTodos, [newId]: false });
    setTodoValue('');
  };

  const deleteTodo = (idToDelete) => {
    const itemIndexToDelete = todos.findIndex(todo => todo.id === idToDelete);
    setTodos(todos.filter((todo, index) => index !== itemIndexToDelete));
  };

  const toggleTodoColor = (id) => {
    setCheckedTodos({ ...checkedTodos, [id]: !checkedTodos[id] });
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo List</h2>
      <input
        type="text"
        value={todoValue}
        onChange={handleInputChange}
        placeholder="Enter todo text"
        className="todo-input"
        required
      />
      <button onClick={addTodo} className="add-button">Add Todo</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${checkedTodos[todo.id] ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={checkedTodos[todo.id]}
              onChange={() => toggleTodoColor(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaxTodoLimitBug;
