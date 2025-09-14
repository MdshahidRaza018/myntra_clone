import React from 'react'
import Firstcard from './Firstcard';

const Firstimage = () => {
     const data=[{img:"https://static.iwmbuzz.com/wp-content/uploads/2021/07/street-style-to-formal-fashion-rishabh-pants-wardrobe-has-every-outfit-for-your-mood-2.jpg",brand:"HIGHLANDER",description:"Casual,Cool,Confident",discount:"Min. 30% off"},
        {img:"https://th.bing.com/th/id/R.a113d1bf7a194f2e417df9a733ed4e13?rik=uD6RqsplBmysCw&riu=http%3a%2f%2fwww.whoa.in%2f2023-Whoa%2f-virat-kohli-beard-styles-beard-virat-kohli-wallpaper.jpg&ehk=f3ylRQSf9YDgF4LFv22IMZfzWGFLaQxDNoM8KciUlRg%3d&risl=&pid=ImgRaw&r=0",brand:"ADIDAS",description:"Style meets Comfort",discount:"Min. 50% off"},
        {img:"https://bookingagentinfo.com/wp-content/uploads/2022/06/kl_rahul.jpg",brand:"SNITCH",description:"Modern Comfort",discount:"Min. 60% off"},
        {img:"https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2023/12/26120408/Deepika-Padukone--1000x1000.jpg",brand:"FABLE STREET",description:"Western flair,Modern Elegance",discount:"Min. 50% off"},
        {img:"https://i.pinimg.com/originals/a7/0a/78/a70a78d2448a4e3607c676029865c803.jpg",brand:"HOUSE OF CHIKANKARI",description:"Shine With Confidence",discount:"Min. 30% off"},
        {img:"https://th.bing.com/th/id/R.3aad156b9479aec85c1e508da44c265d?rik=n3H6YIBM3fDi4w&riu=http%3a%2f%2fbananaclub.co.in%2fcdn%2fshop%2ffiles%2fAbyssBlackCrochetShirt.jpg%3fv%3d1721302702&ehk=%2bpn%2bbQYYu%2fK8Lmj%2bLd8BOZO2MaRLjttCpRG2Wcf2aHI%3d&risl=&pid=ImgRaw&r=0",brand:"POWER LOOK",description:"Effortless Fashion",discount:"Min. 60% off"},
        {img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2888948/2018/3/6/11520319314451-na-3101520319314247-1.jpg",brand:"TOKYO TALKIES",description:"Where glam Meets the Wild West",discount:"Min. 70% off"},
        {img:"https://tse1.explicit.bing.net/th/id/OIP.Oxf4UBo74ynPfnreS1V84gAAAA?w=300&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",brand:"GIVA ",description:"Shine Bright,Wear beutiful",discount:"Min. 65% off"},
        {img:"https://unsungbollywood.files.wordpress.com/2022/06/b9722-ahan-shetty-1.jpg",brand:"KILLER",description:"Just Wear And Make Flavour",discount:"Min. 25% off"},
        {img:"https://tse1.mm.bing.net/th/id/OIP.XZHzEgrB1UR7fc4kCli1KQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",brand:"ZARA",description:"Wear,Look Prettier",discount:"Min. 55% off"}
        
    ];
  return (
    <div className=' flex items-center justify-center flex-wrap '>
       
      {data.map((item,index)=>
    (
        <Firstcard key={index} image={item.img} brand={item.brand} discount={item.discount}  description={item.description}/>
    ))}
       
    </div>
  )
}

export default Firstimage