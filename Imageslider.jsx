import React, { useEffect,useState } from 'react'

const Imageslider = () => {
  const image=["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      "https://plus.unsplash.com/premium_photo-1750895096925-903f7ef8c1ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      "https://images.unsplash.com/photo-1532795986-dbef1643a596?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      "https://images.unsplash.com/photo-1560073210-1eb8ea89d4cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
      const [currentIndex,setCurrentIndex]=useState(0);
       useEffect(()=>
      {
        const interval=setInterval(()=>{
         setCurrentIndex((prevIndex)=>(prevIndex+1)%image.length)
        },5000);
        return()=>clearInterval(interval);
      },[]);
    
  return (
    <div className='h-100 w-screen object-fill overflow-hidden transition-opacity duration-700 ease-in-out'>
     <img src={image[currentIndex]} alt="" className='h-full w-full' />
    </div>
  ) 
}

export default Imageslider