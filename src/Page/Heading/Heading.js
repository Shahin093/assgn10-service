import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/dentist-logo/dentist-logo.png'
const Heading = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='sticky="top"' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='sticky="top"'>
                    <Navbar.Brand href="#home" as={Link} to={'/'}>
                        <img height='30px' width='50px' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to={'/login'}>
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>




                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Heading;