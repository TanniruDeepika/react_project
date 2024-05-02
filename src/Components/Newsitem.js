import React from 'react'
import flower from '../Flower.jpg'
const Newsitem = ({title,description,url,src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-5  px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src?src:flower} className="card-img-top" alt="..." style={{height:"200px" ,width:"325px"}}/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"news"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default Newsitem
