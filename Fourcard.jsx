import React from 'react'

const Fourcard = ({image,brand,discount,available}) => {
  return (
    <div className='h-60 w-45 bg-blue-950 shadow-lg'>
<div className='h-40 w-full object-cover overflow-hidden'>
    <img src={image} alt="" className='h-40 w-full'/>
</div>
<div className='font-mono text-zinc-100 text-center font-semibold'>
    <h1>{brand}</h1>
    <h1>{discount}</h1>
    <button className={`h-7 w-25 p-1 rounded-md text-xs ${available==true?"bg-zinc-100":"bg-red-700"} ${available==true?"text-zinc-700":"text-zinc-100"}`}>
        {available?"Shop Now":"Out Of Stock"}
    </button>
</div>
    </div>
  )
}

export default Fourcard