import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPiMac = () => {
    const [{
        techiMacGallery,
        techiMac, amountiMac, symbol
    }, dispatch] = useStateValue();

    const toggleiMacGallery1 = () => {
        dispatch({
            type: 'TOGGLE_IMAC_GALLERY1',
            techiMacGallery: techiMacGallery,
        })
    }

    return (
        techiMac.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleiMacGallery1} src={techiMacGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techiMacGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techiMac.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountiMac}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techiMac.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleiMacGallery1} src={techiMacGallery.gallery1} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techiMacGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techiMac.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountiMac}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techiMac.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPiMac;
