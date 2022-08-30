import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPPS5 = () => {
    const [{
        techPS5Album, techPS5Gallery,
        techPS5, amountPS5, symbol
    }, dispatch] = useStateValue();

    const togglePS5Gallery1 = () => {
        dispatch({
            type: 'TOGGLE_PS5_GALLERY1',
            techPS5Gallery: 'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
        })
    }

    const togglePS5Gallery2 = () => {
        dispatch({
            type: 'TOGGLE_PS5_GALLERY2',
            techPS5Gallery: 'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
        })
    }

    const togglePS5Gallery3 = () => {
        dispatch({
            type: 'TOGGLE_PS5_GALLERY3',
            techPS5Gallery: 'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
        })
    }

    const togglePS5Gallery4 = () => {
        dispatch({
            type: 'TOGGLE_PS5_GALLERY4',
            techPS5Gallery: 'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
        })
    }

    const togglePS5Gallery5 = () => {
        dispatch({
            type: 'TOGGLE_PS5_GALLERY5',
            techPS5Gallery: 'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg',
        })
    }

    return (
        techPS5.inStock === true
        ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={togglePS5Gallery1} src={techPS5Album.gallery1} alt="gallery"/>
                        <img onClick={togglePS5Gallery2} src={techPS5Album.gallery2} alt="gallery"/>
                        <img onClick={togglePS5Gallery3} src={techPS5Album.gallery3} alt="gallery"/>
                        <img onClick={togglePS5Gallery4} src={techPS5Album.gallery4} alt="gallery"/>
                        <img onClick={togglePS5Gallery5} src={techPS5Album.gallery5} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techPS5Gallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techPS5.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountPS5}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techPS5.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={togglePS5Gallery1} src={techPS5Album.gallery1} alt="gallery"/>
                        <img onClick={togglePS5Gallery2} src={techPS5Album.gallery2} alt="gallery"/>
                        <img onClick={togglePS5Gallery3} src={techPS5Album.gallery3} alt="gallery"/>
                        <img onClick={togglePS5Gallery4} src={techPS5Album.gallery4} alt="gallery"/>
                        <img onClick={togglePS5Gallery5} src={techPS5Album.gallery5} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techPS5Gallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techPS5.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountPS5}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techPS5.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPPS5;
