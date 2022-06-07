import React from 'react'

export default class Todo extends React.Component {
  render() {
    return <li className='todo' key={this.props.todo.id}>{this.props.todo.name}</li>
  }
}
