import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, title, completed } = todo;
  const getStyle = () => {
    return {
      backgroundColor: '#e8ebed',
      borderBottom: '1px solid #fcfcfc',
      padding: '5px',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type='checkbox' onChange={toggleComplete.bind(this, id)} />{' '}
        {title}
        <button onClick={deleteTodo.bind(this, id)} style={btnStyle}>
          x
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  padding: '3px 5px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
