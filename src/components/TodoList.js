import React from 'react';
import EditTodo from './EditTodo';
// import EditableLabel from 'react-inline-edit';


class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.title = "";
    this.description = "";
    
  }

  handleDelete = (e) => {
    const id = this.props.value.id;
    this.props.callBackFromParent(id);
  }
  
  render(){
    return(
      <li id = {this.props.value.id}>
        <div>
          <div>
            <input type="checkbox" onChange = {this.props.handleCheckbox}>
            </input> 
            <span>{this.props.value.createdAt}</span>
          </div>
          <div>
            <h1 onChange = {this.props.onEditChangeHandler} value = {this.props.value.title}>{this.props.value.title}</h1>
            <p value = {this.props.value.description}>{this.props.value.description}</p>
          </div>
        
          <div>
            <button onClick = {this.props.handleEdit} value = {this.props.isEditable.value}>{this.props.isEditable.value}</button>
            <button onClick = {this.handleDelete}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoList;