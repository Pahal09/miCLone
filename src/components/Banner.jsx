import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import "../styles/banner.css"

const Banner = ({banner}) => {
  return (
    <div className='banner'>
        <Carousel fade>
            {
                banner.map((item, index)=>(
                    <Carousel.Item key={item.image} id="banner" interval={1000} keyboard={true}>
                        <img src={item.image} id='bannerImage' alt={`${index}`} className="d-block w-100" />
                    <Carousel.Caption>
                    <h4 style={{fontSize:"4px", color:"red"}}>{item.name} </h4>
                    <p>{item.source} </p>
                    <p style={{fontSize:"10px"}}>{item.description} </p>
                    <u style={{fontSize:"5px"}}>Read more </u>
                    </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Banner