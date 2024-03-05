import React, { useState, useEffect } from 'react'
import NavCard from './NavCard'
import "../styles/NavOption.css"

const NavOption = ({ miPhones, redmiPhones, tv, laptop, fitness, audio, home, accessories }) => {
    const [miPhonesToggle, setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle, setRedMiPhonesToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    useEffect(() => {
        if(window.location.pathname == "/miPhones"){
            return setMiPhonesToggle(true)
        }
        if(window.location.pathname == "/redmiPhones"){
            return setRedMiPhonesToggle(true)
        }
        if(window.location.pathname == "/tv"){
            return setTvToggle(true)
        }
        if(window.location.pathname == "/laptops"){
            return setLaptopToggle(true)
        }
        if(window.location.pathname == "/fitness"){
            return setFitnessToggle(true)
        }
        if(window.location.pathname == "/home"){
            return setHomeToggle(true)
        }
        if(window.location.pathname == "/audio"){
            return setAudioToggle(true)
        }
        if(window.location.pathname == "/accessories"){
            return setAccessoriesToggle(true)
        }
    }, [])
    

    return (
        <div className='navOptions'>
            {
                miPhonesToggle ? miPhones.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                redmiPhonesToggle ? redmiPhones.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                tvToggle ? tv.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                laptopToggle ? laptop.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                fitnessToggle ? fitness.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                homeToggle ? home.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                audioToggle ? audio.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
            {
                accessoriesToggle ? accessories.map((item, index) => (
                    <NavCard image={item.image} index={index} name={item.name} price={item.price} />
                )) : null
            }
        </div>
    )
}

export default NavOption