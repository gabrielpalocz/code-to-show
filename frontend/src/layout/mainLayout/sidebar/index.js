import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';
import { SideBarButtons } from './sideBarButtons/sideBarButtons';

/**
 * 
 * @returns sidebar section to the main layout 
 */

const Sidebar = () => {
    const { height } = useWindowDimensions()

    return (
        <>
            <div id="sidebar" className="border-none sticky-top" style={{ top:"5.2rem" }}> 
                <div id="sidebar-nav" className="border-0 rounded-0 text-sm-start" style={{ minWidth: '14.7rem', maxWidth: '14.7rem', minHeight: `calc(${height}px - 6.4rem)`, maxHeight: `calc(${height}px - 6.4rem)` }}>
                    <nav className="d-grid gap-2 pt-4 pe-3" style={{ maxWidth:'14.2rem' }}>
                        <SideBarButtons />
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
