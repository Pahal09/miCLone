import React from 'react'
import "../styles/ProductReviewCard.css"
const ProductReviewCard = ({ name, index, price, review, image }) => {
    return (
        <div className='productReviewCard'>
            <img src={image} alt={`${index} product`} />
            <h5>{review}</h5>
            <div>
                <span>{name}</span>
                <b>{price}</b>
            </div>
        </div>
    )
}

export default ProductReviewCard