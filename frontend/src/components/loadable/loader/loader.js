import React from 'react'


/**
 * 
 * @returns The loader for when the page is loading
 */

const Loader = () => (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "100%" }}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }} />
            <div></div>
            <strong>Loading...</strong>
        </div>
    )

export default Loader;