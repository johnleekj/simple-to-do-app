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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log('updating', id);

    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    
    this.setState( {todos: updatedTodos} );
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
    handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}
export default App;
