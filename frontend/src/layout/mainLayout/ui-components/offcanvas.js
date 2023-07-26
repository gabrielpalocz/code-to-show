import React from 'react'
import { SideBarButtons } from '../sidebar/sideBarButtons/sideBarButtons'
import { BiWorld } from 'react-icons/bi';
import { useSelector } from 'react-redux';

/**
 * 
 * @returns offcanvas used like sidebar when the screen size is md 
 */

const Offcanvas = () => {
    const darkMod = useSelector(state => state.darkMode.darkModeState);
    return (
        <div className={`offcanvas offcanvas-start ${darkMod ? 'bg-dark' : ''}`} scroll="true" tabIndex="10" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ maxWidth: '16rem' }}>
            <div className="offcanvas-header" >
                <span className="offcanvas-title" id="offcanvasNavbarLabel" >
                    <div className='d-flex align-items-center' style={{marginTop: '0.2rem'}} >
                        <BiWorld className={`${darkMod ? 'text-bg-dark' : ''}`} style={{ 'fontSize': '2.8rem' }} />
                        <span className={`ms-2 ${darkMod ? 'text-bg-dark' : ''}`} style={{ 'fontSize': '1.8rem' }}><strong>COMPANY</strong></span>
                    </div>
                </span>
            </div>
            <div className="offcanvas-body" style={{ marginTop: '0.1rem' }}>
                <nav className="d-grid gap-2 ms-1" style={{ maxWidth:'13.2rem', marginTop: '0.6rem' }}>
                    <SideBarButtons />
                </nav>
            </div>
        </div>
    )
}

export default Offcanvas