import React from 'react';
import { Carousel, InputGroup } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/bannr-3.jpg';
const Slider = () => {
    return (
        <div className='mt-2 p-2'>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ background: "rgba(0, 0, 0, 0.6)" }}
                        height="600px"
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>COVID HOME CARE PACKAGE</h3>
                        <p>COVID Home Care package COVID Home Care Package for COVID positive patients with no/mild symptoms.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ background: "rgba(0, 0, 0, 0.6)" }}
                        height="600px"
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Night Guard &
                            Bruxism Guard</h3>
                        <p>prevent the cracks from forming in your teeth from excessive biting pressure or grinding your teeth. It may also called Teeth Guard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ background: "rgba(0, 0, 0, 0.6)" }}
                        height="600px"
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Periodontal
                            Treatment</h3>
                        <p>Sometimes basic general dental cleaning are not enough due to the conditions already present in your mouth. Then we must look into a slightly more aggressive form of dental cleaning.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;