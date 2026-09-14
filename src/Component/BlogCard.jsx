import React from 'react'

function BlogCard({ item }) {
  return (
    <div className="relative group  hover:border hover:border-black mb-20">
       <img  src={item.image}  alt={item.title}  className="w-full h-full object-cover transition-all"  />
       
       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-opacity flex flex-col items-center justify-center p-4 ">
          <p className="text-gray-500 text-sm mb-6">{item.date}</p>
          <h3 className="font-semibold text-[24px] cursor-pointer flex justify-center text-center">{item.title}</h3>
          <p className="text-sm mt-2 flex justify-center cursor-pointer text-center hover:translate-x-[4px] hover:text-gray-600">read more</p>
       </div>
    </div>
  )
}

export default BlogCard