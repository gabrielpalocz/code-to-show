import { Suspense } from 'react';
import Loader from './loader/loader'


// -------------------------------[ LOADABLE - LAZY LOADING ]------------------------------- //

/**
 * 
 * @param {*} Component - Receive a component to be loadable with lazy loading
 * @returns the loadable 
 */

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
