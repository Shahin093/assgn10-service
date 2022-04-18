import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('dentistDetail.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="row mt-5" id='services'>
            <h2>Our Services</h2>
            {
                services.map(service => <Service id={service.id} service={service} ></Service>)
            }
        </div>
    );
};

export default Services;