import React from 'react'

const Secondcard = ({image,brand,discount}) => {
return(
    <div className='h-70 w-55 bg-blue-950 shadow-md rounded-md hover:shadow-3xl'>
  <div className='h-50 w-full object-cover overflow-hidden object-center'>
<img src={image} alt="" className='rounded-md hover:scale-110  transition-transform duration-300 ease-in-out'/>
  </div>
  
 <div  className=' text-zinc-700 text-center border-2 m-2 bg-zinc-100 p-1 hover:cursor-default'>
     <h1 className='text-xl font-mono font-bold shadow-sm'>{brand}</h1>
  <h2 className='font-extrabold'>{discount}</h2>
 </div>
</div>
)
}
export default Secondcard