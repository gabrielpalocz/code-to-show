import { lazy } from 'react';
import Loadable from '../components/loadable/loadable';
import ErrorLayout from '../layout/errorLayout';

// error routing
const ErrorPage = Loadable(lazy(() => import('../components/errorPage/errorPage')));


// ------------------------------[ ERROR ROUTING ]------------------------------- //

/**
 * This is the error routing 
 */

const ErrorRoute = {
    path: '/',
    element: <ErrorLayout />,
    children: [   
        {
            path: "*", 
            element: <ErrorPage />
        },
    ]
    
};

export default ErrorRoute;
