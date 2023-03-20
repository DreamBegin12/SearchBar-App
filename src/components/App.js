import React from 'react'
import SearchBar from './SearchBar'

import axios from "axios";
import ImageList from "./ImageList"

class App extends React.Component {
  state={images:[]}
  onSearchSubmit= async (term)=>{
     const response=await axios.get("https://api.unsplash.com/search/photos",{
      params:{query:term},
      headers:{
        Authorization: "Client-ID RoSoN8O656oxxib_F6hN7IiRCXp2rJgYKEEbPhNjeto"
      }
    })
    this.setState({images:response.data.results   })

  }
  render(){
    return(
      <div>
        <SearchBar userSubmit={this.onSearchSubmit}/>
        <span className='center'>Found:{this.state.images.length} images</span>
        <ImageList foundImages={this.state.images}/>
      </div>
    )
  }
}

export default App;
