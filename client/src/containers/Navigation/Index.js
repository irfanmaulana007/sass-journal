import React from 'react'

import './Navigation.scss'
import Logo from 'Components/navigation/Logo'
import NavItem from 'Components/navigation/NavItem'

export default function Navigation () {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Logo />
                    </div>

                    <div className="col-6 text-center">
                        <NavItem name="home" url="home" />
                        <NavItem name="journal" url="journal" />
                        <NavItem name="contact" url="contact" />
                        <NavItem name="about" url="about" />
                    </div>
                </div>


            </div>
        </nav>
    )
}