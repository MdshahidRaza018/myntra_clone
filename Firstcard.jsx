import React from 'react'

const Firstcard = ({image,brand,description,discount}) => {
return(
    <div className='h-90 w-75 shadow-md mt-2'>
  <div className='h-65 w-full object-cover overflow-hidden'>
<img src={image} alt="" />
  </div>
  
 <div  className=' text-zinc-700 text-center'>
     <h1 className='text-xl font-mono font-bold shadow-sm'>{brand}</h1>
  <hr className='text-zinc-300'/>
  <p>{description}</p>
  <h2 className='font-extrabold'>{discount}</h2>
 </div>
</div>
)
}
export default Firstcard;