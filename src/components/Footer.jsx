import React from 'react'
import { instagram, facebook } from '../icons/index'
import './css/Footer.css'

const onInstaClick = () => {
    window.open("")
}

const onFacebookClick = () => {
    window.open("")
}

const Footer = () => {
    return (
        <div className="foot">
            <div className="footName">SG Photography@2021</div>
            <div className="instagramIcon" onClick={onInstaClick}>{instagram}</div>
            <div className="facebookIcon" onClick={onFacebookClick}>{facebook}</div>
       </div>
    )
}

export default Footer
