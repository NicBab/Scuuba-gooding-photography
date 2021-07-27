import React from 'react'
import './css/Home.css'
import homePic from '../images/glaciermilkycomposite.jpg'

const Home = () => {
    return (
        <>
            <div>
                <img className="img-fluid"
                    src={homePic}
                    alt="glaciermilkycomposite">
                </img>
            </div>
        </>
    )
}

export default Home
