import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    return (

        <div>
            <h3>THis is Details : {serviceId}</h3>
            <Link to={'/checkout'}>
                <button className='btn btn-primary'>Proced Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;