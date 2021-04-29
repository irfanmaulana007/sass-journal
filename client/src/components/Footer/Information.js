import React from 'react'
import { Link } from 'react-router-dom'

export const Information = () => {
    return (
        <>
            <h5>Information</h5>
            <ul className="list-unstyled small text-uppercase">
                <li><Link to="home">home</Link></li>
                <li><Link to="journal">journal</Link></li>
                <li><Link to="contact">contact</Link></li>
                <li><Link to="about">about</Link></li>
            </ul>
        </>
    )
}

export default Information