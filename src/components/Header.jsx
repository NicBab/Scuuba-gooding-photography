import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
          <Nav className="d-flex, align-items-center justify-content-center" 
            activeKey="/home">
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
        </>
    )
}

export default Header
