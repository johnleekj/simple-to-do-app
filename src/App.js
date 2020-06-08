import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList'

class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleDelete = (index) => {
    console.log('testing')
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
       <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length}/>
          <ToDoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
