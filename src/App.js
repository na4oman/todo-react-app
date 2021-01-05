import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

const App = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => setTodos(res.data));
  }, []);

  // Toggle Todo Completed
  const toggleCompleteHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id !== id ? todo : { ...todo, completed: !todo.completed };
      })
    );
  };

  // Delete Todo
  const deleteTodoHandler = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  // Add Todo
  const addTodoHandler = (title) => {
    // axios
    //   .post('https://jsonplaceholder.typicode.com/todos', {
    //     title,
    //     completed: false,
    //   })
    //   .then((res) => setTodos([...todos, res.data]));
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), title }]);
  };

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route
            exact
            path='/'
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodoHandler} />
                <Todos
                  todos={todos}
                  toggleComplete={toggleCompleteHandler}
                  deleteTodo={deleteTodoHandler}
                />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
