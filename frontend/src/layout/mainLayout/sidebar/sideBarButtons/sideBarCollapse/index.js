import React, { useState } from 'react';
import SideBarLink from '../sideBarLinks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { useSelector } from 'react-redux';

// This styling will be applied to the Button when the
// Button is currently selected.
let activeStyle = {
    textDecoration: "none",
    '--bs-btn-bg': '#eef2f6',
    '--bs-btn-color': '#1070fd',
    '--bs-btn-hover-color': 'white',
    '--bs-btn-active-bg': '#1070fd',
    '--bs-btn-hover-bg': '#1070fd',
    '--bs-btn-active-color': 'white'
};
let activeClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 fw-bolder my-2 ms-1";

// This styling will be applied to the Button when the
// Button is currently not selected.
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


/**
 * 
 * @param {*} props - from sideBarButtons
 * @returns collapse button with all the links for the routing of the pages
 */

const SideBarCollapse = (props) => {
    const [open, setOpen] = useState(false);
    const darkMod = useSelector(state => state.darkMode.darkModeState);
    const [styleSelector, setStyleSelector] = useState(nonActiveStyle);
    const [classSelector, setClassSelector] = useState(nonActiveClassName);
    const [iconSelector, setIconSelector] = useState(<IconChevronDown />);

    const handleClick = () => {
        setOpen(!open);
        setStyleSelector(open ? nonActiveStyle : activeStyle);
        setClassSelector(open ? nonActiveClassName : activeClassName);
        setIconSelector(open ? <IconChevronDown /> : <IconChevronUp />);
    };

    return (
        <>
            <div className="d-grid gap-2" key={`divCol--${props.keyCol}`}>
                <button className={classSelector} type="button" data-bs-toggle="collapse" onClick={handleClick} data-bs-target="#collapseItems" aria-expanded={open} aria-controls="collapseItems" style={styleSelector} key={`divBu--${props.keyCol}`}>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-start ms-1' key={`divl--${props.keyCol}`}>
                            <props.collapse.icon key={`icon--${props.keyCol}`} />&nbsp;<span key={`span--${props.keyCol}`}>{props.collapse.title}</span>
                        </div>
                        {iconSelector}
                    </div>
                </button>
            </div>
            <div className="collapse" id="collapseItems" key={`divColIt--${props.keyCol}`}>
                <div className={`card card-body border-0 ${darkMod ? 'bg-dark' : ''}`} key={`divCard--${props.keyCol}`}>
                    {props.collapse.children?.map((collap, indexC) =>
                        <SideBarLink keyIt={`Collap--${indexC}`} items={collap} key={`ItemC--${indexC}`} />
                    )}
                </div>
            </div>
        </>
    )
}

export default SideBarCollapse;
