import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  render() {
    return(
       <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length}/>
          {/* <ToDoList /> */}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
