import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Searchbar = () => {
  return (
    <div>
      <SearchIcon/>
<input className='h-10 w-60 pl-2 rounded-sm bg-zinc-100  text-zinc-400 items-center ' type="text" placeholder='Search for products and more' />
    </div>
  )
}

export default Searchbar