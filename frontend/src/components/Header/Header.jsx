import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  // const [menu,setMenu] = useState("home")


  return (
    <div className = 'header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your cravings and elevate your dining experience, one delicious meal at a time!</p>
            <a href = '#explore-menu'>View Menu</a> 
        </div>
    </div>
  )
}

export default Header
