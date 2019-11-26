import SearchBar from './../components/SearchBar';
import TodoListGenerator from './../components/TodoListGenerator';
import AddTodo from './../components/AddTodo';
import React from 'react';

// import './Todo.css';
import todolistArray from './../constants/todolist';


class Todo extends React.Component{
  constructor(){
    super();
    this.state = {
      listItems : todolistArray,
      isQuery : false,
    }
    this.edit = {
      isEditable: false,
      value: "Edit"
    }
    this.isChecked  = false;
    this.checkedData = [];
    this.a = [];
  }


  deleteHandler = (id) => {
    const listItems = this.state.listItems;
    const item = listItems.find(obj => obj.id === id);
    const index = listItems.indexOf(item);
    listItems.splice(index,1);
    this.setState({
      listItems: listItems
    });
  }

  onEditChangeHandler = (e) => {
    console.log("hello");
    console.log(e.target.value);
  }

  editHandler = (e) => {
    this.edit.isEditable = !this.edit.isEditable;
    const button = e.target;
    const parent = button.parentElement.parentElement.children[1].children;

    if(this.edit.isEditable){
      for (let i = 0; i< parent.length; i++){
        parent[i].contentEditable = true;
        parent[i].className = "editable-content";
        // parent[i].onChange = this.onEditMode(e,parent[i]);
        this.edit.value = "Save";   
      }
    }else{
      let list = this.state.listItems;
      let id = button.parentElement.parentElement.parentElement.id;

      let item = list.find(item => item.id == id);
      item.title = parent[0].innerHTML;
      item.description = parent[1].innerHTML;
      item.createdAt = new Date().toISOString().split('T')[0];
      list[list.indexOf(item)] = item;

      this.setState({
        listItems : list
      });

      for (let i = 0; i< parent.length; i++){
        parent[i].contentEditable = false;
        parent[i].className = "";
        this.edit.value = "Edit";
      }
    }
    button.innerHTML = this.edit.value;
  }


  addHandler = (title, desc) =>{
    let todo = null;
    console.log(desc);
    let lastId = todolistArray[todolistArray.length-1].id;
    todo = {
      id: lastId + 1,
      title: title,
      description: desc,
      createdAt: new Date().toISOString().split('T')[0], 
      deadline: new Date().toISOString().split('T')[0],
      status:false
    }

    todolistArray.push(todo);
    this.setState({
      listItems: todolistArray
    });

  }

  
  queryHandler = (state, value) => {
    let updatedList = [];
    if(value.length<1){
      updatedList = todolistArray;
      // return;
    }else{
      todolistArray.forEach(item => {
        const lc = item.title.toLowerCase();
        const filter = value.toLowerCase();
        if(lc.includes(filter)){
          updatedList.push(item);
        }
      });
    }
    this.setState({
      listItems: updatedList
    });
  }
  
  checkboxHandler = (e) => {
    const checkBox = e.target;
    const parent = checkBox.parentElement.parentElement;
    console.log(parent.children[1]);
    if(checkBox.checked){
      parent.children[1].className = "strike-through";
      const list = this.state.listItems;
      const item = list.find(item => item.id == parent.parentElement.id);
      item.status = checkBox.checked;
      list.splice([list.indexOf(item)],1);
      list.push(item);
      this.setState({
        listItems: list
      });
      // console.log();
    }else{
      parent.children[1].className = "";
    }
    console.log(parent.parentElement.id);
    
    // item.status = checkBox.checked;
 
  }

  render(){
    return(
      <div className='todo'>
        <SearchBar callBackFromParent = {this.queryHandler}></SearchBar>
        <AddTodo isAddBtnClicked = {this.state.isAddBtnClicked} addclick = {this.addHandler}></AddTodo>
        <TodoListGenerator handleEdit = {(e) => this.editHandler(e)} callBackFromParent = {this.deleteHandler} 
        value = {this.state.isQuery?this.a:this.state.listItems} isEditable = {this.edit} 
        onDelete = {this.deleteHandler} handleCheckbox = {(e) => this.checkboxHandler(e)}
        onEditChangeHandler = {(e) => this.onEditChangeHandler(e)}
        
        ></TodoListGenerator>
      </div>
    );
  }
}


export default Todo;