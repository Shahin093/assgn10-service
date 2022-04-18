import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import Loading from '../Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const errorElement = '';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        console.log('successfully regis');
        navigate('/home')
    }
    const navigate = useNavigate();
    if (error) {
        console.log(error);
    }

    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    return (
        <div className='register-from'>
            <h2 style={{ textAlign: "center" }}>Please Register</h2>

            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">This Agree</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />

            </form>
            {errorElement}
            <p>Already have a acount <Link to={'/login'} className='text-primary p-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;