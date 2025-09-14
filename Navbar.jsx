import React from 'react'
import {NavLink} from "react-router-dom"
import Searchbar from './Searchbar';
import Navlogo from './Navlogo';
function Navbar() {
  return (
    
      <nav className=' pt-5 pb-5 pl-15 pr-15 flex justify-between shadow-md'>

        <img className='h-10 w-10 ' src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="" />
      <div className='flex gap-10 mt-1  text-black font-bold'>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""
          ].join(" ");
        }}
        to="/"
        >
        HOME
        </NavLink>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""

          ].join(" ");
        }}
        to="/Men"
        >
        MEN
        </NavLink>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""

          ].join(" ");
        }}
        to="/Women"
        >
        WOMEN
        </NavLink>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""

          ].join(" ");
        }}
        to="/Kids"
        >
        KIDS
        </NavLink>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""

          ].join(" ");
        }}
        to="/Beauty"
        >
      BEAUTY
        </NavLink>
         <NavLink className={(e)=>{
          return [
          e.isActive? "text-red-300":"",
          e.isActive? "font-bold":""

          ].join(" ");
        }}
        to="/Studio"
        >
      STUDIO
        </NavLink>

      </div>
      <Searchbar/>
      <Navlogo/>
      </nav>
   
  )
}

export default Navbar;