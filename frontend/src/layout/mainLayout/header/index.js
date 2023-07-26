import React, { useState } from 'react'
import UserSettings from './userSettingsSection';
import AlertSection from './alertSection';
import useWindowDimensions from '../../../utils/hook/screenSize';
import { BiWorld } from 'react-icons/bi';
import { IconMenu2 } from '@tabler/icons';
import { useSelector } from 'react-redux';

/**
 * 
 * @returns header section to the main layout
 */

const Header = () => {
    const { width } = useWindowDimensions();
    const [open, setOpen] = useState(true);
    const darkMod = useSelector(state => state.darkMode.darkModeState);

    const handleClick = () => {
        setOpen(!open);
        document.getElementById("sidebar").classList.toggle('sideclosed');
    };

    return (
        <>
            <ul className={`nav justify-content-between align-content-center sticky-top ${darkMod ? 'bg-dark' : ''}`} style={{ minHeight: '5.2rem', width: '100%', backgroundColor: 'white' }}>
                <li className="nav-item">
                    <div className='d-flex align-items-center ms-3' >
                        <BiWorld className={`d-none d-md-block ${darkMod ? 'text-bg-dark' : ''}`} style={{ 'fontSize': '2.8rem' }} />
                        <span className={`ms-2 d-none d-md-block ${darkMod ? 'text-bg-dark' : ''}`} style={{ 'fontSize': '1.8rem' }}><strong>COMPANY</strong></span>
                        <div className={width >= 768 ? 'ms-5' : 'ms-2'} >
                            <button className="btn btn-outline-primary btn-sm border-0 rounded-3 mt-1" id='butons' type="button" onClick={width >= 768 ? handleClick : null} data-bs-target={width >= 768 ? "" : "#offcanvasNavbar"} data-bs-toggle={width >= 768 ? "" : "offcanvas"} style={{ '--bs-btn-bg': '#eef2f6' }}>
                                <IconMenu2 />
                            </button>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className='d-flex'>
                        <AlertSection />
                        <UserSettings />
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Header