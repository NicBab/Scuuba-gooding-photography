import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import './css/ImgCarousel.css'

const ImgCarousel = () => {
    const URL = "https://picsum.photos"
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     axios.get(URL).then((res) => {
    //         setImages(res.data.images)
    //     })
    // })
    

    let images = [
        {
            original: `${URL}/id/1018/1000/600/`,
            thumbnail: `${URL}/id/1018/250/150/`,
        },
        {
            original: `${URL}/id/1015/1000/600/`,
            thumbnail: `${URL}/id/1015/250/150/`,
        },
        {
            original: `${URL}/id/1019/1000/600/`,
            thumbnail: `${URL}/id/1019/250/150/`,
        },
    ]; 

    return <ImageGallery items={images} />
}

export default ImgCarousel












