import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        console.log('set login');
    }



    return (
        <div>
            <h2>Please Login</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <p>New to dentist <Link to={'/register'} className='text-primary p-auto text-decoration-none' onClick={handleRegister}  >Please Register</Link></p>
                <p>Forget Password <button className='btn btn-link text-primary p-auto text-decoration-none' >Reset Password</button></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;