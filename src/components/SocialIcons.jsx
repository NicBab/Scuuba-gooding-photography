import React from 'react'
import { instagram, facebook } from '../icons/index'
import './css/SocialIcons.css'

const SocialIcons = () => {

    const onInstaClick = () => {
        window.open("https://www.instagram.com/scubagooding.photo/")
    }
    
    const onFacebookClick = () => {
        window.open("https://www.facebook.com/scubagoodingphoto")
    }

    return (
        <div className="icons">
            <div className="instagramIcon" onClick={onInstaClick}>{instagram}</div>
            <div className="facebookIcon" onClick={onFacebookClick}>{facebook}</div>
        </div>
    )
}

export default SocialIcons
