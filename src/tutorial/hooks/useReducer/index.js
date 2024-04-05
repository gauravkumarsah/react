import React, { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'addTodo',
  TOGGLE_TODO: 'toggleTodo',
  DELETE_TODO: 'deleteTodo',
};

const newTodo = (name) => {
  return { name: name, id: new Date().getTime(), completed: false };
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
  }
};

const UseReducer = () => {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span style={{color: todo.completed ? '#AAA' : '#000'}}>{todo.name}</span>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
            }
          >
            Toggle
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;
