import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPAirTag = () => {
    const [{
        techAirtagGallery,
        techAirtag, amountAirtag, symbol
    }, dispatch] = useStateValue();

    const toggleAirTagGallery1 = () => {
        dispatch({
            type: 'TOGGLE_AIRTAG_GALLERY1',
            techAirtagGallery: techAirtagGallery,
        })
    }

    return (
        techAirtag.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleAirTagGallery1} src={techAirtagGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techAirtagGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techAirtag.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountAirtag}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techAirtag.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleAirTagGallery1} src={techAirtagGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techAirtagGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techAirtag.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountAirtag}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techAirtag.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPAirTag;
