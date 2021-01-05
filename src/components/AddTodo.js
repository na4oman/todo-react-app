import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={onSubmitHandler} style={{ display: 'flex' }}>
      <input
        type='text'
        name='title'
        placeholder='Add Todo...'
        style={{ flex: '11', padding: '5px' }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='submit'
        value='Submit'
        className='btn'
        style={{ flex: '1' }}
      />
    </form>
  );
};

export default AddTodo;
