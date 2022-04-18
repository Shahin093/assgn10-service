import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/dentist-logo/dental (2).png'
const Heading = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='bg-dark' style={{ background: '#B2BEB5' }}>
            <Navbar className='sticky="top"' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to={'/home'}>
                        <img height='60px' width='200px' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link style={{ color: 'white' }} href="home#services">Services</Nav.Link>
                            <Nav.Link style={{ color: 'white', fontWeight: '30px' }} as={Link} to={'/blogs'} href="#blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' style={{ color: '#000080' }} as={Link} to={'/aboutme'} href="#aboutme">About Me</Nav.Link>
                            {
                                user ?
                                    <button style={{ background: '#000080' }} className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link style={{ background: '#000080' }} as={Link} to={'/login'}>
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>




                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Heading;