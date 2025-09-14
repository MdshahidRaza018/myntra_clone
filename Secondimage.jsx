import React from 'react'
import Secondcard from './Secondcard';

const Secondimage = () => {    
     const data=[{img:"https://i.ebayimg.com/images/g/WOgAAOSwfsNke~bE/s-l1600.jpg",brand:"SHOES",discount:"Min. 30% off"},
        {img:"https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_1280.jpg",brand:"PERFUME",discount:"Min. 50% off"},
        {img:"https://th.bing.com/th/id/OIP.GYijLaLjc-OGHU0vyWYjiwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",brand:"WATCHES",discount:"Min. 60% off"},
        {img:"https://tse1.explicit.bing.net/th/id/OIP.5AnV6qN5fAG11OcDzxC-HQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",brand:"PURSE",discount:"Min. 50% off"},
        {img:"https://www.stio.com/cdn/shop/products/Hari-Mari-M-Fields-top-view-Tan-Tan_1024x1024.jpg?v=1583525890",brand:"FLIP FLOP",discount:"Min. 30% off"},
        {img:"https://tse3.mm.bing.net/th/id/OIP.0Ewv97Wiq7aABkfig4x7qAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",brand:"BOAT",discount:"Min. 60% off"},
      
    ];
  return (
    <div className=' flex items-center justify-center flex-wrap gap-2 object-center'>
       
      {data.map((item,index)=>
    (
        <Secondcard key={index} image={item.img} brand={item.brand} discount={item.discount}/>
    ))}
       
  
    </div>
  )
}

export default Secondimage