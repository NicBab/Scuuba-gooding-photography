import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'
import SocialIcons from './SocialIcons'

const Header = () => {

  const onShopClick = () => {
    window.open("https://sgphotography.bigcartel.com/product/natures-window-fine-art-print")
  }

    return (
        <div className="header">
           <div className="name">
            <Link to="/" className="fa-title">SG Photography</Link>
             <SocialIcons />
            </div>
           <div id="nav">
              <Nav.Item>
                <Nav.Link><Link to="/" className="fa-home">Home</Link></Nav.Link>
               </Nav.Item>
              <Nav.Item>
                  <Nav.Link><Link to="/gallery" className="fa-gallery">Gallery</Link></Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link><a href="shop" onClick={onShopClick} className="fa-shop">Shop</a></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                <Nav.Link><Link to="/bio" className="fa-bio">Bio</Link></Nav.Link>
               </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to="/contact"className="fa-contact">Contact</Link></Nav.Link>
               </Nav.Item>
           </div>
        </div>
    )
}

export default Header
