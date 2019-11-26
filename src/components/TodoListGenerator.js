import TodoList from './TodoList';
import React from 'react';

class TodoListGenerator extends React.Component{
  

  callback = (data,e) => {
    this.props.callBackFromParent(data);
  }

  render(){
    const list = this.props.value;
    const listitem = list.map((number) =>
    
        <TodoList handleEdit = {this.props.handleEdit} callBackFromParent = {this.callback} key={number.id}
            value={number} isEditable={this.props.isEditable} onEditChangeHandler = {this.props.onEditChangeHandler}
            handleCheckbox = {this.props.handleCheckbox}/>
    
    );
    return(
      <div className = "todoList">
        <h1>My TODOS</h1>
        <ul>
          {listitem}
        </ul>
      </div>
    );
  }
}

export default TodoListGenerator;