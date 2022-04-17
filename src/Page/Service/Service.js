import React from 'react';

const Service = ({ service }) => {
    const { name, price, description, url } = service;
    return (
        <div className=' col-12 col-lg-4 '>


            <div className=''>

                <img width={'350px'} src={url} alt="" />
                <h3>{name}</h3>
                <p>{name}</p>
                <h5>{price}</h5>
                <p>{description}</p>
            </div>


        </div>
    );
};

export default Service;