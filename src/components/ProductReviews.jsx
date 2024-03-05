import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../styles/ProductReviews.css"


const ProductReviews = ({ productReviews }) => {
    return (
        <div className='productReviews'>
            {
                productReviews.map((item, index) => (
                    <ProductReviewCard key={item.image} index={index} name={item.name} review={item.review} price={item.price} image={item.image} />
                ))
            }
        </div>
    )
}

export default ProductReviews