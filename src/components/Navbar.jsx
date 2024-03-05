import React from 'react'
import "../styles/nav.css"
import { Link } from "react-router-dom"
import { logo } from "../data/data.json"
const Navbar = () => {
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" fill='grey' /></svg>
    const burger = <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill='black'><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>

    return (
        <>
            <div className='nav'>
                <div className="logo">
                    <a href='/'>
                        <img id='logoImage' src={logo} alt="" />
                    </a>
                </div>
                <div className="menu">
                    <a className='navlinks' href="/miPhones">Mi Phones</a>
                    <a className='navlinks' href="/redmiPhones">Redmi Phones</a>
                    <a className='navlinks' href="/tv">TV</a>
                    <a className='navlinks' href="/laptops">Laptops</a>
                    <a className='navlinks' href="/fitness">Fitness & Lifestyle</a>
                    <a className='navlinks' href="/home">Home</a>
                    <a className='navlinks' href="/audio">Audio</a>
                    <a className='navlinks' href="/accessories">Accesories</a>
                </div>
                <div className="searchBox">
                    <input type="search" placeholder='Search Products' name="" id="" />
                    <span> {searchIcon}</span>
                </div>
                <span className='burger'>
                    {burger}
                </span>
            </div>
        </>
        
    )
}

export default Navbar