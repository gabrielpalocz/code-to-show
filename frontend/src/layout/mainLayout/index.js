import { Outlet } from 'react-router-dom';
import useWindowDimensions from '../../utils/hook/screenSize';
import Header from './header';
import Sidebar from './sidebar/index';
import Offcanvas from './ui-components/offcanvas';
import { useSelector } from 'react-redux';


// -------------------------------[ MAIN LAYOUT ]------------------------------- //

/**
 * 
 * @returns the main layout view 
 */ 

const MainLayout = () => {
    const { height } = useWindowDimensions();
    const darkMod = useSelector(state => state.darkMode.darkModeState);

    return (
        <>
            <div className={`${darkMod ? 'bg-dark' : ''} `} style={{ minWidth: '15rem' }}>
                <Header />
                <div className="container-fluid px-4" style={{ minHeight: `calc(${height}px - 5.2rem)` }}>
                    <div className="row flex-nowrap px-2">
                        <div className="col-auto px-0 d-none d-md-block">
                            <Sidebar />
                        </div>
                        <main className="col p-4 rounded-4" style={{ backgroundColor:`${darkMod ? '#565656' : '#eef2f6'}`, minHeight: `calc(${height}px - 6.4rem)` }}>
                            <Outlet />
                        </main>
                    </div>
                </div>
                <div className='d-block d-md-none'>
                    <Offcanvas />
                </div>
            </div>
        </>
    );
}
export default MainLayout;