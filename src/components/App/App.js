import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'
// import './App.css';
 
class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    );
  }
}
export default App;
