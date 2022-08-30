import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPJacket = () => {
    const [{
        clothesJacketAlbum, clothesJacketGallery,
        clothesJacket, amountJacket, symbol
    }, dispatch] = useStateValue();

    const toggleJacketGallery1 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY1',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
        })
    }

    const toggleJacketGallery2 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY2',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
        })
    }

    const toggleJacketGallery3 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY3',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
        })
    }

    const toggleJacketGallery4 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY4',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
        })
    }

    const toggleJacketGallery5 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY5',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
        })
    }

    const toggleJacketGallery6 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY6',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
        })
    }

    const toggleJacketGallery7 = () => {
        dispatch({
            type: 'TOGGLE_JACKET_GALLERY7',
            clothesJacketGallery: 'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png',
        })
    }

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: clothesJacket.id,
                name: clothesJacket.name,
                gallery: clothesJacketGallery,
                description: clothesJacket.description,
                amount: amountJacket,
                symbol: symbol,
            }
        })
    }

    return (
        clothesJacket.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleJacketGallery1} src={clothesJacketAlbum.gallery1} alt="gallery"/>
                        <img onClick={toggleJacketGallery2} src={clothesJacketAlbum.gallery2} alt="gallery"/>
                        <img onClick={toggleJacketGallery3} src={clothesJacketAlbum.gallery3} alt="gallery"/>
                        <img onClick={toggleJacketGallery4} src={clothesJacketAlbum.gallery4} alt="gallery"/>
                        <img onClick={toggleJacketGallery5} src={clothesJacketAlbum.gallery5} alt="gallery"/>
                        <img onClick={toggleJacketGallery6} src={clothesJacketAlbum.gallery6} alt="gallery"/>
                        <img onClick={toggleJacketGallery7} src={clothesJacketAlbum.gallery7} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={clothesJacketGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{clothesJacket.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountJacket}</strong>
                    </p>
                    <button onClick={addToCart}>ADD TO CART</button>
                    <p>{clothesJacket.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleJacketGallery1} src={clothesJacketAlbum.gallery1} alt="gallery"/>
                        <img onClick={toggleJacketGallery2} src={clothesJacketAlbum.gallery2} alt="gallery"/>
                        <img onClick={toggleJacketGallery3} src={clothesJacketAlbum.gallery3} alt="gallery"/>
                        <img onClick={toggleJacketGallery4} src={clothesJacketAlbum.gallery4} alt="gallery"/>
                        <img onClick={toggleJacketGallery5} src={clothesJacketAlbum.gallery5} alt="gallery"/>
                        <img onClick={toggleJacketGallery6} src={clothesJacketAlbum.gallery6} alt="gallery"/>
                        <img onClick={toggleJacketGallery7} src={clothesJacketAlbum.gallery7} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={clothesJacketGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{clothesJacket.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountJacket}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {clothesJacket.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPJacket;
