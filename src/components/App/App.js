import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import todoData from '../ToDoItem/todoData';
// import './App.css';
 
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: todoData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}
export default App;
