import React, { Component } from 'react';
import "./SearchBar.css"
class SearchBar extends Component{
    state={val:''}
    onInputChange=(event)=>{
        this.setState({val:event.target.value})

    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render(){
        return(
            <div>
                <div className='onlyname'>
                    <p>Name : Snehashish Das</p>
                    <p>Email Id : das034252@gmail.com</p>
                </div>
                <form onSubmit={this.onFormSubmit} className='flexContainer'>
                    <label htmlFor='search'><h2>Image Search:</h2></label>
                    <input type="text" 
                     className='inputStyle'
                     placeholder='type images you want'
                     value={this.state.val}
                     onChange={this.onInputChange}
                     />

                </form>
            </div>
        )
    }
}
export default SearchBar;
