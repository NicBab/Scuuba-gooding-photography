import React from 'react'
import './css/Footer.css'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <>
          <div className="foot">
            <div className="footName">SG Photography@2021</div>
            <SocialIcons />
          </div>
          <div className="stellar">Stellar Innovation development</div>
        </>
    )
}

export default Footer
