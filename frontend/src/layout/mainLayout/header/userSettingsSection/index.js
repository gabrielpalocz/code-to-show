import React from 'react'
import { IconUserCircle, IconSettings, IconLogout, IconMoon } from '@tabler/icons';
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../../../store/feactures/theme/darkModeSlice'

/**
 * 
 * @returns The users section of the header
 */

const UserSettings = () => {
    const darkMode = useSelector(state => state.darkMode.darkModeState)
    const dispatch = useDispatch()

    /**
     * Send true or false to redux to control dark mode state when darkModeSwitch is handled
     */
    const switchDarkMode = () => {
        darkMode
            ? dispatch(toggleDarkMode(false))
            : dispatch(toggleDarkMode(true));
    };
    return (
        <div className="dropdown" >
            <button className="btn btn-outline-primary btn-sm border-0 rounded-4 me-4" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" title="settings" aria-expanded="false" style={{ '--bs-btn-bg': '#eef2f6' }}>
                <div className='p-1' >
                    <IconUserCircle />&nbsp;&nbsp;<IconSettings />
                </div>
            </button>
            <ul className="dropdown-menu rounded-4 shadow mt-2">
                <li><h6 className="dropdown-header">User Settings</h6></li>
                <li>
                    <span className="dropdown-item-text" type="button">
                        <div className="form-check form-switch form-check-reverse">
                            <label className="form-check-label" htmlFor="darkModeSwitch"><IconMoon />&nbsp;&nbsp;Dark Mode</label>
                            <input className="form-check-input shadow-none" type="checkbox" id="darkModeSwitch"  onChange={switchDarkMode} checked={darkMode}/>
                        </div>
                    </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" type="button"><IconSettings />&nbsp;&nbsp;Account Settings</button></li>
                <li><button className="dropdown-item" type="button">&nbsp;<IconLogout />&nbsp;&nbsp;Logout</button></li>
            </ul>
        </div>
    )
}

export default UserSettings