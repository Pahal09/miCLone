import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
const Slider = ({ start }) => {
  return (
    <div>
      <Carousel fade>
        {
          start.map((item) => (
            <Carousel.Item interval={2000} keyboard={true}>
              <img className='d-block w-100' src={item} alt="" />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Slider