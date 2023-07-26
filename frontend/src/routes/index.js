import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './mainRoutes';
import AuthenticationRoutes from './authenticationRoutes';
import ErrorRoute from './errorRoute';


// ----------------------------[ ROUTING RENDER ]----------------------------- //

/**
 * 
 * @returns the routing render 
 */

export default function Routes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, ErrorRoute]);
}
