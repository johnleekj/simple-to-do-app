import React from 'react';
import {Button} from 'react-bootstrap';

const ToDoList = (props) => {
    const todos = props.tasks.map ((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })

    return(
        <div className='list-wrapper'>
            {todos}
        </div>
    );
}

const Todo = (props) => {
    return(
      <div className='list-item'>
        <p>{props.content}</p>
        <Button variant="light" className="delete-is-pulled-right" onClick={() => {props.onDelete(props.id)}}>X</Button>
      </div>
    );
  }



export default ToDoList;