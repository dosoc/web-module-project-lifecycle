import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  
  render() {
    console.log("this is props", this.props)
    return (
        <div id='todos'>
          {this.props.todos.map(todo=> {
            return <Todo 
                    handleToggle={this.props.toggleCompleted} 
                    key={todo.id} 
                    todo={todo}
                  />
          })}
        </div>
    )
  }
}
