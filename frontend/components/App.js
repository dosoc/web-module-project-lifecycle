import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: []
  }
  componentDidMount(){
    axios.get(URL)
      .then(res=> {
        console.log(res.data.data)
        this.setState({
          todos: res.data.data
        })
      })
      .catch(err => {console.error(err)})
  }
  render() {
    return (
      <div className='App'>
        <h2>Todos:</h2>

        <TodoList todos={this.state.todos}/>

        <Form/>

        
        <button>Hide Complete</button>
      </div>
    )
  }
}
