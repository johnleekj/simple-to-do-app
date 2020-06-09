import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import SubmitForm from './components/SubmitForm';

class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleDelete = (index) => {
    console.log('deleting')
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  handleSubmit = (task) => {
    console.log('submitting');
    this.setState( {tasks: [...this.state.tasks, task]} );
  }

  render() {
    return(
       <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length}/>
          <ToDoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
