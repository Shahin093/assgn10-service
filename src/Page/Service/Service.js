import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, url } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className=' col-12 col-lg-4 '>

            <div className='' style={{ border: '1px solid blue', borderRadius: '10px', marginTop: '10px' }}>

                <img width={'350px'} height={'300px'} src={url} alt="" />
                <h3>{name}</h3>
                <p>{name}</p>
                <h5>{price}</h5>
                <p>{description}</p>
                {/* <Link to={'/checkout'}>
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Proced Checkout</button>
                </Link> */}
                <button onClick={() => navigateToServiceDetail(id)} className='btn-primary'>Book: {name}</button>
            </div>


        </div>
    );
};

export default Service;