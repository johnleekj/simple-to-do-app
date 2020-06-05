import React from 'react';

class ToDoItem extends React.Component {
    
    render() {
        return (
            <div className="todo-item" >
                <input type="checkbox" 
                        onChange={() => this.props.handleChange(this.props.item.id)} 
                        checked={this.props.item.completed} />
                <p>{this.props.item.text}</p>
            </div>       
        )
    }
}
export default ToDoItem;