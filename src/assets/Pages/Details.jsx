import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
  let {id}=useParams()
  let [data,setData]=useState([])
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/${id}`).then(a=>a.json()).then(b=>setData(b))
    },[id])
  return (
                 <Link to={`/Details/${data.id}`}>
    <div className='mx-auto container'>Details of <br />
     <img src={data.thumbnail} alt="" />
     <p className="text-gray-800 font-semibold mt-1">${data.price}</p>
    <p className='mt-3 w-140 text-center mb-8 text-gray-600'>{data.description}</p>
    </div>
    </Link>
  )
}

export default Details