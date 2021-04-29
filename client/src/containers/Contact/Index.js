import React, { useState } from 'react'

import FormGroup from 'Components/utilities/FormGroup/FormGroup'
import Button from 'Components/utilities/Button/Button'


export default function Contact() {
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')

    function sendContact () {
        const payload = {
            email: email,
            subject: subject,
            message: message,
        }

        console.log(payload);
    }

    return (
        <div>
            <FormGroup name="email" value={email} handleChange={(e) => setEmail(e.target.value)} />
            <FormGroup name="subject" value={subject} handleChange={(e) => setSubject(e.target.value)} />
            <FormGroup type="textarea" name="message" value={message} handleChange={(e) => setMessage(e.target.value)} />
            <Button label="send message" size="block" handleClick={sendContact} />
        </div>
    )
}