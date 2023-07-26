import React from 'react'
import { NavLink } from "react-router-dom";

/**
 * 
 * @param {*} props - from sideBarButtons
 * @returns all the links for the routing of the pages
 */

const SideBarLink = (props) => {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "none",
        color: '#1070fd',
        backgroundColor: '#eef2f6',
        '--bs-btn-active-bg': ''
    };
    let activeClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 fw-bolder my-2 ms-1";

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently not selected.
    let nonActiveStyle = {
        textDecoration: "none",
        '--bs-btn-bg': 'transparent',
        '--bs-btn-hover-bg': '#1070fd',
        '--bs-btn-color': '#6c757d',
        '--bs-btn-hover-color': 'white',
        '--bs-btn-active-bg': '#1070fd',
        '--bs-btn-active-color': 'white'
    };
    let nonActiveClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 my-2 ms-1";

    return (
        <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar" >
            <NavLink
                key={`link--${props.keyIt}`}
                className={({ isActive }) =>
                    isActive ? activeClassName : nonActiveClassName
                }
                to={props.items.url}

                style={({ isActive }) =>
                    isActive ? activeStyle : nonActiveStyle
                }
            >
                <div className='d-flex justify-content-start ms-1' key={`divl--${props.keyIt}`} >
                    <props.items.icon key={`icon--${props.keyIt}`} />&nbsp;<span className='text-start' key={`span--${props.keyIt}`}>{props.items.title}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default SideBarLink;
