import React from 'react';
import Offer from './Offer';
import "../styles/Offers.css"

const Offers = ({ offer }) => {
    return (
        <div className='offersSection'>
            {/* {
                offer.map((item, index) => (
                    <Offer key={item.image} index={index} link={item.url} />
                ))

            } */}
            <img src="https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230" alt="" />
            <img src="https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230" alt=""  />
            <img src="https://i02.appmifile.com/761_operator_in/27/04/2021/09489d6a77f96111372718a551d2799d.png?width=398&height=230" alt="" />
        </div>
    )
}

export default Offers