import React from 'react'
import { Container } from 'react-bootstrap'
import bioPic from '../images/meatsoprislake.jpg'
import './css/Bio.css'

const Bio = () => {
    return (
        <Container>
            <figure className="position-relative">
                <figCaption>
                            Hi my name is Stephen Ross aka Scuba and I'm a full time photographer based in Colorado. 
                        Being born and raised in Colorado it's no wonder that I took an affinity to all things outdoors. 
                        Whether it be hiking, backpacking, water sports, snow sports or just sitting and taking in the beauty of nature,
                        you can always find me looking for my next adventure. For my 9-5 job I manage a photography company that specializes in snowmobiling, 
                        rafting, ziplining, and a handful of other outdoor adventure activities. In my free time I like to stay busy with freelance nature and landscape photography,
                        and this is a place that I can share it all with the world! Hope you enjoy! 
                    </figCaption>
                <img src={bioPic} alt="meatsoprislake" className="img-fluid" />
            </figure>
        </Container>
    )
}

export default Bio




