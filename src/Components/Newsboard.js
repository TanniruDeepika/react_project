import React, { useEffect } from 'react'
import { useState } from 'react'
import Newsitem from './Newsitem'
const Newsboard = ({category}) => {
    const[articles,setArti]=useState([])
    useEffect(()=>{
let url= ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7e13bfe1d72d442790ed09e439ff2fc8`
fetch(url).then(response=>response.json()).then(data=>setArti(data.articles))
    },[category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((value,index)=>{
            return <Newsitem title={value.title} description={value.description} src={value.urlToImage} url={value.url}/>
        })
      }
    </div>
  )
}

export default Newsboard
