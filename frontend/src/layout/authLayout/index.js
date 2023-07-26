import { Outlet } from 'react-router-dom';
import useWindowDimensions from '../../utils/hook/screenSize';


// -------------------------------[ AUTH LAYOUT ]------------------------------- //

/**
 * 
 * @returns the authentication layout view 
 */ 

const AuthLayout = () => {
    const { height } = useWindowDimensions()
    return (
        <>
            <div className='d-flex justify-content-center align-items-center p-3' style={{ minWidth: "17rem", minHeight: `${height}px`, backgroundColor: '#eef2f6' }}>
                <Outlet />
            </div>
        </>
    );
}
export default AuthLayout;
