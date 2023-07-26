import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Card } from '../ui-components/card.js'
import { LoginValidationSchema } from '../forms/loginForm';
import { RiLoginCircleLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLogin } from '../../../store/feactures/userCrud/userCrudSlice';


// -------------------------------[ LOGIN VIEW ]------------------------------- //

/**
 * 
 * @returns Login view
 */

const Login = () => {
    const [credentials, setCreadentials] = useState(null);
    const navigate = useNavigate();
    const { dataLogin, status, error } = useSelector(state => state.userCrud);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     async function logInSession() {
    //         try {
    //             const loginRequest = await fetch(
    //                 `http://localhost:9000/users/login/${credentials.email}/${credentials.password}`, { method: "GET" }
    //             );
    //             const loginAnswer = await loginRequest.json();

    //             if (loginAnswer.length !== 0) {
    //                 if (loginAnswer[0].email === credentials.email && loginAnswer[0].password === credentials.password) {
    //                     localStorage.setItem('user', loginAnswer[0].email);
    //                     alert('welcome ' + loginAnswer[0].email);
    //                     navigate("/dashboard/default");
    //                 }
    //             } else {
    //                 alert('User or Password wrong, please try again');
    //             }

    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     }

    //     if (credentials) {
    //         logInSession();
    //     }
    // }, [credentials, navigate]);

    useEffect(() => {

        if (credentials) {
            dispatch(getUserLogin(credentials));
        }

    }, [credentials, dispatch]);

    useEffect(() => {

        if (status === 'succeeded') {
            navigate("/dashboard/default");
        }

        if (status === 'dismatch') {
            alert('User or Password wrong, please try again');
        }

    }, [navigate, status]);

    return (
        <Card>
            <h2 className="card-title fw-bold pt-3">
                <div className='d-flex justify-content-center '>
                    <RiLoginCircleLine className='fs-1 me-1' />
                    LOGIN
                </div>
            </h2>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, Have a good day!</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
            <LoginValidationSchema onSubmit={(e) => setCreadentials(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/authentication/register" style={{ color: 'black', textDecoration: 'none' }}>Do not have an account?</Link>
        </Card>

    )
}

export default Login;