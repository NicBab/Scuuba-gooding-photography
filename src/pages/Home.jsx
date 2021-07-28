import React from 'react'
import './css/Home.css'
import woodWindow from '../images/woodwindowfinal.jpg'

const Home = () => {
    return (
        <>
            <div>
                <img className="img-fluid"
                    src={woodWindow}
                    alt="woodwindow">
                </img>
            </div>
        </>
    )
}

export default Home
