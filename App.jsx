import React from 'react'
import Navbar from './components/Navbar'
import Routing from './components/Routing'
import Imageslider from './components/Imageslider'
import Firstimage from './components/Firstimage'
import Secondimage from './components/Secondimage'
import Thirdimage from './components/Thirdimage'
import Fourimage from './components/Fourimage'
import Ad from './components/Ad'


const App = () => {
  return (
    <div className='h-full w-screen '>
   
 
   <Navbar/>
  <Routing/>
<Imageslider/>
<h1 className='font-mono text-3xl text-zinc-600 mt-20 mb-20 ml-10 font-semibold'>RISING STAR</h1>
<Firstimage/>
<h1 className='font-mono text-5xl text-blue-950 mt-20 mb-20 ml-10 font-semibold text-center'>BEST STYLES IN FOCUS</h1>
<Secondimage/>
<h1 className='font-mono text-5xl text-blue-950 mt-20 mb-10 ml-10 font-semibold text-center'>CRAZY DEALS</h1>
<img src="https://as1.ftcdn.net/v2/jpg/05/11/15/38/1000_F_511153898_smcwd9rndX3HzaQNHraChDJ5tEtliuSd.jpg" alt="" className='h-30 w-full object-cover ' />
<Thirdimage/>     
<h1 className='font-mono text-5xl text-blue-950 mt-10 ml-10 font-semibold text-center'>SHOP BY COTEGORY</h1>
<img src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-colorful-wavy-lines-png-image_11602714.png" alt="" className='h-50 w-screen' />
<Fourimage/>
<Ad/>
 </div>
  )
}

export default App