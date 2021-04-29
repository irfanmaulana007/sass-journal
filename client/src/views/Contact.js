import React from 'react'

import ContactContainer from 'Containers/contact/Index'
import Title from 'Components/utilities/Title/Title'

export default function Contact () {
    return (
        <div className="container">
            <Title title="contact" subTitle="ini adalah form untuk kontak" />
            <div className="row">
                <div className="col-8 offset-2">
                    <ContactContainer />
                </div>
            </div>
        </div>
    )
}