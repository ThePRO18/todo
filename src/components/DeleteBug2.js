import React, { useState } from 'react';

// Fixed bug: Deleting the correct item
const DeleteBugFixed = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Example Todo 1' },
    { id: 2, text: 'Example Todo 2' },
    { id: 3, text: 'Example Todo 3' }
  ]);

  const deleteTodo = (idToDelete) => {
    // Find the index of the todo item with the matching id
    const itemIndexToDelete = todos.findIndex(todo => todo.id === idToDelete);

    // Delete the todo item with the matching id
    setTodos(todos.filter((todo, index) => index !== itemIndexToDelete));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteBugFixed;