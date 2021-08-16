import React from 'react'
import './css/Shop.css'

const Shop = () => {

    const onShopClick = () => {
    window.open("https://sgphotography.bigcartel.com/product/natures-window-fine-art-print", "_self")
  }

    return (
        <>
            <div className="shop" onClick={onShopClick} style={{textAlign: "center"}}>
                Visit my big cartel page Here!
            </div>
        </>
    )
}

export default Shop
