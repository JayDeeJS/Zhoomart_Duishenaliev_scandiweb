import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPAirPods = () => {
    const [{
        techAirpodsGallery,
        techAirpods, amountAirpods, symbol
    }, dispatch] = useStateValue();

    const toggleAirPodsGallery1 = () => {
        dispatch({
            type: 'TOGGLE_AIRPODS_GALLERY1',
            techAirpodsGallery: techAirpodsGallery,
        })
    }

    return (
        techAirpods.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleAirPodsGallery1} src={techAirpodsGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techAirpodsGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techAirpods.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountAirpods}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techAirpods.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleAirPodsGallery1} src={techAirpodsGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techAirpodsGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techAirpods.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountAirpods}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techAirpods.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPAirPods;
