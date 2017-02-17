import React from 'react';

export default class CreateTodos extends React.Component {
  render(){
      return(
        <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Things I need To-Do" ref="createInput"/>
                <button> create </button>
         </form>
    );
  }
  handleCreate(event){
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
      this.refs.createInput.value=' ';
  }
}
