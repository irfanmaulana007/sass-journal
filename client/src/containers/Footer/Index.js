import React from 'react'
import ShortDescription from 'Components/footer/ShortDescription'
import Information from 'Components/footer/Information'

import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ShortDescription />
                    </div>
                    <div className="col-3 pl-5 pr-5">
                        <Information />
                    </div>
                    <div className="col-3">
                        <ShortDescription />
                    </div>
                    <div className="col-3">
                        <ShortDescription />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer