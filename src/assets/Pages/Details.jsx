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
    <div className='mx-auto container px-4 lg:px-0'>Details of <br />
     <img src={data.thumbnail} alt="" className='w-full lg:w-auto' />
     <p className="text-gray-800 font-semibold mt-1">${data.price}</p>
    <p className='mt-3 w-full lg:w-140 text-center mb-8 text-gray-600'>{data.description}</p>
    </div>
    </Link>
  )
}

export default Details