import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { cart } from '../icons/index'
import './css/Header.css'
import SocialIcons from './SocialIcons'

const Header = () => {
    return (
        <div className="header">
          <div className="name">
            <Link to="/" className="fa-title">SG Photography</Link>
             <SocialIcons /></div>
           <Nav id="nav">
             <Nav.Item>
               <Nav.Link><Link to="/" className="fa-home">Home</Link></Nav.Link>
              </Nav.Item>
             <Nav.Item>
               <Nav.Link><Link to="/shop" className="fa-shop">Shop</Link></Nav.Link>
              </Nav.Item>
             <Nav.Item>
               <Nav.Link><Link to="/contact"className="fa-contact">Contact</Link></Nav.Link>
              </Nav.Item>
             <Nav.Item>
              <Nav.Link><Link to="/bio" className="fa-bio">Bio</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/cart" className="fa-cart">{cart}</Link></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    )
}

export default Header
