import React from 'react'
import { Carousel } from 'react-bootstrap'
import kremmlingSunsetPano from '../images/kremmlingsunsetpano.jpg'
import spoutingRockMoonrise from '../images/spoutingrockmoonrise.jpg'
import woodWindow from '../images/woodwindowfinal.jpg'
import glacierMilkyComp from '../images/glaciermilkycomposite.jpg'
import sloansLakeSunset1 from '../images/Sloans Lake Sunset 1.jpg'
import foggyMeadow3 from '../images/foggymeadow3.jpg'
import mesaSunBurst from '../images/MesaSunBurst.jpg'
import mesaArchRightSunburst from '../images/MesaArchRightSunburst.jpg'

const ImgCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={kremmlingSunsetPano}
                alt="kremmling sunset"
                />
                <Carousel.Caption>
                 <h3>Kremmling Sunset</h3>
                  <p>some info here</p>
                </Carousel.Caption>
              </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={spoutingRockMoonrise}
                alt="spouting rock"
                />
                <Carousel.Caption>
                 <h3>Spouting Rock Moonrise</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={woodWindow}
                alt="wood window"
                />
                <Carousel.Caption>
                 <h3>Wood Window</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={glacierMilkyComp}
                alt="glacier milkyway comp"
                />
                <Carousel.Caption>
                 <h3>Glacier MilkyWAy composite</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sloansLakeSunset1}
                alt="Sloans Lake Sunset"
                />
                <Carousel.Caption>
                 <h3>Sloans Lake Sunset</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={foggyMeadow3}
                alt="foggy Meadow 3"
                />
                <Carousel.Caption>
                 <h3>Foggy Meadow</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={mesaSunBurst}
                alt="mesa SunBurst"
                />
                <Carousel.Caption>
                 <h3>Mesa Sunburst</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={mesaArchRightSunburst}
                alt="mesa arch right Sunburst"
                />
                <Carousel.Caption>
                 <h3>Mesa Arch Sunburst</h3>
                  <p>some info here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImgCarousel