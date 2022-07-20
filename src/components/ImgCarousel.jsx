import ImageGallery from 'react-image-gallery'
import './css/ImgCarousel.css'
import bistimilky from "../images/bistimilky.jpg"
import foggyMeadow from "../images/foggymeadow3.jpg"
import woodwindowfinal from "../images/woodwindowfinal.jpg"
import  thunderheadsunset from "../images/ThunderheadSunset.jpg"
import spoutinrockmoonrise from "../images/spoutingrockmoonrise.jpg"
import soprisflowers from "../images/soprisflowers3.jpg"
import lakesunset from "../images/Sloans Lake Sunset 1.jpg"
import mesasunburst from "../images/MesaSunBurst.jpg"
import meatsoprislake from "../images/meatsoprislake.jpg"
import kremmlingsunset from "../images/kremmlingsunsetpano.jpg"

const ImgCarousel = () => {

    let images = [
 
        {
            original: foggyMeadow,
            thumbnail: foggyMeadow,
        },
        {
            original: bistimilky,
            thumbnail: bistimilky,
        },
        {
            original: woodwindowfinal,
            thumbnail: woodwindowfinal,
        },
        {
            original: thunderheadsunset,
            thumbnail: thunderheadsunset,
        },
        {
            original: spoutinrockmoonrise,
            thumbnail: spoutinrockmoonrise,
        },
        {
            original: soprisflowers,
            thumbnail: soprisflowers,
        },
        {
            original: lakesunset,
            thumbnail: lakesunset,
        },
        {
            original: mesasunburst,
            thumbnail: mesasunburst,
        },
        {
            original: meatsoprislake,
            thumbnail: meatsoprislake,
        },
        {
            original: kremmlingsunset,
            thumbnail: kremmlingsunset,
        },
    ]; 

    return <ImageGallery items={images} />
}

export default ImgCarousel




//original api call 
// {
//     original: `${URL}/id/1018/1000/600/`,
//     thumbnail: `${URL}/id/1018/250/150/`,
// },










