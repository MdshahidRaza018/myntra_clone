import React from 'react'

const Thirdcard = ({image,brand,discount}) => {
 return(
    <div className='h-60 w-60 bg-blue-950 shadow-md rounded-md hover:scale-102 transition-transform duration-300 ease-in-out '>
  <div className='  absolute  '>
<img src={image} alt="" className='w-60 h-60 object-cover overflow-hidden rounded-md '/>
 
  </div>
 
 <div  className=' text-zinc-700 text-center rounded-md  m-2 bg-white opacity-70 p-1 hover:cursor-default relative top-40'>
     <h1 className='text-xl font-mono font-bold shadow-sm'>{brand}</h1>
     <h2 className='font-extrabold'>{discount}</h2>
 </div>
</div>
)
}
export default Thirdcard