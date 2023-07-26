import { lazy } from 'react';
import Loadable from '../components/loadable/loadable';
import MainLayout from '../layout/mainLayout/index';
import { Navigate } from "react-router-dom";

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../components/main/views/dashboard/dashboard')));

// maps routing
const MapOne = Loadable(lazy(() => import('../components/main/views/mapOne')));
const MapTwo = Loadable(lazy(() => import('../components/main/views/mapTwo')));


// ------------------------------[ MAIN ROUTING ]------------------------------- //

/**
 * This is the main routing 
 */

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Navigate to="/authentication/login" replace={true} />            
        },  
        {
            path: 'dashboard/default',
            element: <Dashboard />
        },  
        {
            path: 'maps',
            children: [
                {
                    path: 'mapone',
                    element: <MapOne />
                },
                {
                    path: 'maptwo',
                    element: <MapTwo />
                }, 
            ]
        },  
    ]
};

export default MainRoutes;
