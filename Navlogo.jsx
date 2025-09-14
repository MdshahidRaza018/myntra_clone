import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Navlogo = () => {
  return (
    <div className='flex items-center justify-center gap-8 text-xs bg-white text-xsm  '>
       <div>
        <FavoriteBorderOutlinedIcon/>
        <h1>Wishlisht</h1>
    </div>
    <div>
       <AccountCircleOutlinedIcon/>
        <h1>Account</h1>

    </div>
    <div>
       <ShoppingBagOutlinedIcon/>
        <h1>Bag</h1>

    </div>       
    </div>
  )
}

export default Navlogo