import React from 'react';

class AddTodo extends React.Component{

  handleAdd = () => {
    this.props.addclick(this.title, this.desc);
  }

  onChangeTitle = (e) => {
    this.title = e.target.value;
  }

  onChangeDesc = (e) => {
    this.desc = e.target.value;
  }

  render(){
    return(
      <div className = "add-form">
        <label name = "title">
          <input type = "text" placeholder = "Title Here..." value = {this.title} onChange = {this.onChangeTitle}></input>
        </label>
        <label name = "description">
          <input type = "text" placeholder = "Description Here" value = {this.desc} onChange = {this.onChangeDesc}></input>
        </label>
        <input type = "submit" value = "Add" onClick = {this.handleAdd}></input>
      </div>
    );
  }
}

export default AddTodo;