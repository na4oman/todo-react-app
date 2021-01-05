import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
