import React from 'react'
import './css/Home.css'
import mesaSunBurst from '../images/MesaSunBurst.jpg'

const Home = () => {
    return (
        <>
          <div className="homeImg">
              <img style={{maxWidth: "100%", height: "auto"}}
                   src={mesaSunBurst}
                   alt="Mesa SunBurst">
              </img>
          </div>
       </>
    )
}

export default Home
