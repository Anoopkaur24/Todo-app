import React from 'react';
import './App.css';

function TodoItem({ todo, completeTodo, deleteTodo }) {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.text}</span>
      <div>
        <button onClick={handleComplete}>{todo.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
