import React from 'react';
import './App.css';
import './containers/Todo.css';
import './components/SearchBar.css';
import './components/todolist.css';
import Todo from './containers/Todo';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
