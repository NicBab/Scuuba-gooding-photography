import React from 'react'
import './css/Home.css'
import { Container } from 'react-bootstrap'
import mesaSunBurst from '../images/MesaSunBurst.jpg'

const Home = () => {
    return (
        <>
          {/* <Container 
            className="d-flex justify-content-center"
            style={{maxWidth: "100vw", height: "auto"}}> */}
            <div className="homeImg">
                <img style={{maxWidth: "100%", height: "auto"}}
                     src={mesaSunBurst}
                     alt="Mesa SunBurst">
                </img>
             </div>
          {/* </Container> */}
       </>
    )
}

export default Home
