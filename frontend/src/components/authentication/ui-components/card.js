import React from 'react'


/**
 * 
 * @param {*} props - from the views
 * @returns The card used to wrap the forms content
 */

export const Card = (props) => (
    <div className="card shadow rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
        <div className="card-body" >
            {props.children}
        </div>
    </div>
)

