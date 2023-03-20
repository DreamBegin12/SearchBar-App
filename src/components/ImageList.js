import React from 'react';
import Imagecard from './Imagecard';
import "./imageList.css";


const ImageList = (props) => {
    const imgs=props.foundImages.map(img=>{
        return <Imagecard image={img}/>
    })
  return (
    <div className='image_list'>{imgs}</div>
  )
}

export default ImageList;
