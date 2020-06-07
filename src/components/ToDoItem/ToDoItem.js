import React from 'react';

class ToDoItem extends React.Component {
    
    render() {
        const completedStyle = {
            fontstyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item" >
                <input type="checkbox" 
                        onChange={() => this.props.handleChange(this.props.item.id)} 
                        checked={this.props.item.completed} />
                <p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
            </div>       
        )
    }
}
export default ToDoItem;