import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
          <Nav className="d-flex, justify-content-end" 
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
