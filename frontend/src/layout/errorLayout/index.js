import { Outlet } from 'react-router-dom';


// -------------------------------[ ERROR LAYOUT ]------------------------------- //

/**
 * 
 * @returns the error layout view 
 */ 

const ErrorLayout = () => (
    <>
        <div className='vh-100 row text-center align-items-center p-0 m-0'>
            <Outlet />
        </div>
    </>
);

export default ErrorLayout;