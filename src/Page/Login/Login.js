import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const handleRegister = () => {
        navigate('/register');
    }
    const errorElement = '';



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        // const email = emailRef.current.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        console.log('set login');
    }

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Send EMial');
        } else {
            alert('Please Enter your Email address ');
        }
    }
    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    if (loading || sending) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>Please Login</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {errorElement}
                <p>New to dentist <Link to={'/register'} className='text-primary p-auto text-decoration-none' onClick={handleRegister}  >Please Register</Link></p>
                <p>Forget Password <button className='btn btn-link text-primary p-auto text-decoration-none' onClick={() => resetPassword()}>Reset Password</button></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;