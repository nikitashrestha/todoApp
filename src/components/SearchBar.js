import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
  }

  handleInputChange = (e) => {
    this.setState({
      value : e.target.value
    });
    this.callbackForQueryHandler();
  }

  callbackForQueryHandler = () => {
    if(this.state.value.length>0){
      this.props.callBackFromParent(true, this.state.value);
    }else{
      this.props.callBackFromParent(false,this.state.value);
    }
  }

  render(){
    return(
      <div className='searchbar'>
        <div className = 'wrapper'>
        <input type='text' value = {this.state.value} placeholder = "Search.." onChange = {this.handleInputChange}></input>
        </div>
      </div>
    )
  }
}

export default SearchBar;