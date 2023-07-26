import React from 'react'
import { IconBell } from '@tabler/icons';

/**
 * 
 * @returns The alerts section of the header
 */

const AlertSection = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-outline-primary btn-sm border-0 rounded-3 me-4 mt-1" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" title="Alertas" aria-expanded="false" style={{ '--bs-btn-bg': '#eef2f6' }}>
                <IconBell />
            </button>
            <ul className="dropdown-menu shadow rounded-4 mt-2">
                <li><h6 className="dropdown-header">System Alerts</h6></li>
                <li><button className="dropdown-item" type="button">Alert one</button></li>
                <li><button className="dropdown-item" type="button">Alert two</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
        </div>
    )
}

export default AlertSection