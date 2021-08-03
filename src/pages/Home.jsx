import React from 'react'
import './css/Home.css'
import { Container } from 'react-bootstrap'
import mesaSunBurst from '../images/MesaSunBurst.jpg'

const Home = () => {
    return (
        <>
          <Container 
            className="d-flex justify-content-center" 
            style={{maxWidth: "100vw", maxHeight: "80vh"}}>
            <div className="homeImg">
                <img className="img-fluid"
                    src={mesaSunBurst}
                    alt="Mesa SunBurst">
                </img>
             </div>
          </Container>
       </>
    )
}

export default Home
