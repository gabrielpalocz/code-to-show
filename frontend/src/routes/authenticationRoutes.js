import { lazy } from 'react';
import Loadable from '../components/loadable/loadable';
import AuthLayout from '../layout/authLayout/index';

// login routing
const AuthLogin = Loadable(lazy(() => import('../components/authentication/views/login')));

// registration routing
const AuthRegister = Loadable(lazy(() => import('../components/authentication/views/register')));

// Forgot passsword routing
const ForgotPass = Loadable(lazy(() => import('../components/authentication/views/forgotPass')));


// ------------------------------[ AUTHENTICATION ROUTING ]------------------------------- //

/**
 * This is the authencation routing 
 */

const AuthenticationRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [   
        {
            path: 'authentication/login',
            element: <AuthLogin />
        },
        {
            path: 'authentication/register',
            element: <AuthRegister />
        },
        {
            path: 'authentication/forgotpass',
            element: <ForgotPass />
        },
    ]
};

export default AuthenticationRoutes;
