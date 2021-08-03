import React from 'react'
import './css/Contact.css'
import { mail } from '../icons/index'

const Contact = () => {

    const onMailClick = () => {
        window.location.href="mailto: sgphotography.co@gmail.com"
    }
    return (
        <>
          <div className="contact" style={{textAlign: "center"}}>
            Contact:
            Email sgphotography.co@gmail.com
            <div className="email" onClick={onMailClick}>{mail}</div>
          </div>
        </>
    )
}

export default Contact
