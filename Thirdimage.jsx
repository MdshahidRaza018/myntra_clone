import React from 'react'
import Thirdcard from './Thirdcard';

const Thirdimage = () => {
  const data=[{img:"https://m.media-amazon.com/images/I/71qzRgSeSfL._AC_SL1500_.jpg",brand:"MAKEUP KIT",discount:"Min. 30% off"},
        {img:"https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_1280.jpg",brand:"PERFUME",discount:"Min. 50% off"},
        {img:"https://th.bing.com/th/id/OIP.GYijLaLjc-OGHU0vyWYjiwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",brand:"WATCHES",discount:"Min. 60% off"},
        {img:"https://tse1.explicit.bing.net/th/id/OIP.5AnV6qN5fAG11OcDzxC-HQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",brand:"PURSE",discount:"Min. 50% off"},
        {img:"https://th.bing.com/th/id/R.61f346f2c06e3ed34bee4113fd49bfb1?rik=nIsZoAXZHhOeaQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-VG6h4L1oEKE%2fTfWj2cuDsEI%2fAAAAAAAAHN4%2f6CNsE6YWfYU%2fs1600%2f_MG_3468.JPG&ehk=lOsSI41amDE2ezmnaRVXGZztWjDTZbKm8HPPwBfJ8fQ%3d&risl=&pid=ImgRaw&r=0",brand:"FLIP FLOP",discount:"Min. 30% off"},
      
    ];
  return (
    <div className=' flex items-center justify-center flex-wrap gap-2 object-center'>
       
      {data.map((item,index)=>
    (
        <Thirdcard key={index} image={item.img} brand={item.brand} discount={item.discount}/>
    ))}
       
  
    </div>
  )
}

export default Thirdimage