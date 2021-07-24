import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'

const Header = () => {
    return (
        <div className="header">
         <div className="name">SG Photography</div>
          <Nav id="nav">
            <Nav.Item>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/shop">Shop</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/bio">Bio</Link></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    )
}

export default Header
