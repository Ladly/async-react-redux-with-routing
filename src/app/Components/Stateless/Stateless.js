import React from 'react'
import './Stateless.scss'

export const Stateless = (props) => {
    return (
        <div>
            <h4>I am dumb component.. no reason for me to exist</h4>
            <h6>Author: {props.name}</h6>
        </div>
    )
}