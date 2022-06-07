import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
        <form className='Form' onSubmit={this.props.submit}>
          <input
            type="text"
            name="todoInput"
            placeholder='Add new Todo'
            onChange={this.props.onChange}
            value={this.props.input}/>
          <button>Submit</button>
        </form>
    )
  }
}
