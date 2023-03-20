import React, { Component } from 'react';


 class Imagecard extends Component {
    constructor(props){
        super(props)
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener("load",this.setSpans)
    }
    setSpans =()=>{
        const height=this.imageRef.current.clientHeight;
    }
  render() {
    return (
      <div>
        <img ref={this.imageRef} key={this.props.image.id} 
        src={this.props.image.urls.regular} 
        alt={this.props.image.alt_description}
        />
      </div>
    )
  }
}
export default Imagecard;
