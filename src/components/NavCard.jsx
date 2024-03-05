import React from 'react'
import "../styles/NavCard.css"

const NavCard = ({ name, index, price, image }) => {
    return (
        <div className='navCard'>
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default NavCard