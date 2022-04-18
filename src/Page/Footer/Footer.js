import React from 'react';

const Footer = () => {
    return (
        <div style={{ background: 'rgb(169,184,195)' }}>
            <div className="row">
                <div className='col-12 col-md-4' style={{ border: "2px solid blue " }}>
                    <h1 style={{ background: '#000080', color: '#FFFFFF', width: '100%' }}>Denti <span>Care</span></h1>
                    <h1></h1>
                    <p>A team of dentists working to ensure you receive the vest treatment.</p>
                    <p>01774623000</p>
                    <p>sishahn093@gamil.com</p>
                    <p>denticare.com</p>
                    {/* <p style={{ width: '2px', background: 'red', height: '200px' }}></p> */}
                </div>
                <div className='col-12 col-md-4'>
                    <h1 style={{ background: '#000080', color: '#FFFFFF' }}>About</h1>
                    <p>Our Dental Team</p>
                    <p>Pricing & PriceLish</p>
                    <p>Solutions</p>
                    <p>Dental Services</p>
                    <p>Clients</p>
                </div>
                <div className='col-12 col-md-4'>
                    <h1 style={{ background: '#000080', color: '#FFFFFF' }}>Social Networks</h1>
                    <p></p>
                    <p>Visit DentiCare on these social links connect with us. Make sure to follow our accouts for regular updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;