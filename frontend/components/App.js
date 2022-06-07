import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
    error: "",
    todoNameInput: ""

  }

  todoInputNameChange = (e) => {
    const {value} = e.target
    this.setState({
      ...this.state,
      todoNameInput: value
    })
  }

  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
      .then(res => {
       this.fetchAllTodos()
       this.setState({
         ...this.state,
         todoNameInput: ""
       })
      })
      .catch(err => {
        this.setState({
          ...this.state, 
          error: err.response.data.message
        })
      })
  }

  onTodoFormSumbit = (e) => {
    e.preventDefault()
    this.postNewTodo()
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todos: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state, 
          error: err.response.data.message
        })
      })
  }
  componentDidMount(){
    this.fetchAllTodos()
  }
  handleToggle(todoName){
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.name === todoName? todo.completed = !todo.completed: todo 
      })
    })
  }
  render() {
    return (
      <div className='App'>
        {this.state.error?<div id='error'>Error: {this.state.error}</div> : <div></div>}
        <h2>Todos:</h2>

        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>

        <Form 
          input={this.state.todoNameInput} 
          onChange={this.todoInputNameChange}
          submit={this.onTodoFormSumbit}
          />

        
        <button>Hide Complete</button>
      </div>
    )
  }
}
