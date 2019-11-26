import React from 'react';

class EditTodo extends React.Component{
  render(){
    return(
      <div className = "edit-form">
        <input type = "text" value = {this.props.title}></input>
        <input type = "text" value = {this.props.description}></input>
      </div>
    );
  }
}

export default EditTodo;