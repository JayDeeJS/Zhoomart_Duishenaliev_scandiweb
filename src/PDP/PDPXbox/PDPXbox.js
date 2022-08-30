import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPXbox = () => {
    const [{
        techXboxAlbum, techXboxGallery,
        techXbox, amountXbox, symbol
    }, dispatch] = useStateValue();

    const toggleXboxGallery1 = () => {
        dispatch({
            type: 'TOGGLE_XBOX_GALLERY1',
            techXboxGallery: 'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
        })
    }

    const toggleXboxGallery2 = () => {
        dispatch({
            type: 'TOGGLE_XBOX_GALLERY2',
            techXboxGallery: 'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
        })
    }

    const toggleXboxGallery3 = () => {
        dispatch({
            type: 'TOGGLE_XBOX_GALLERY3',
            techXboxGallery: 'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
        })
    }

    const toggleXboxGallery4 = () => {
        dispatch({
            type: 'TOGGLE_XBOX_GALLERY4',
            techXboxGallery: 'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
        })
    }

    const toggleXboxGallery5 = () => {
        dispatch({
            type: 'TOGGLE_XBOX_GALLERY5',
            techXboxGallery: 'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg',
        })
    }

    return (
        techXbox.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleXboxGallery1} src={techXboxAlbum.gallery1} alt="gallery"/>
                        <img onClick={toggleXboxGallery2} src={techXboxAlbum.gallery2} alt="gallery"/>
                        <img onClick={toggleXboxGallery3} src={techXboxAlbum.gallery3} alt="gallery"/>
                        <img onClick={toggleXboxGallery4} src={techXboxAlbum.gallery4} alt="gallery"/>
                        <img onClick={toggleXboxGallery5} src={techXboxAlbum.gallery5} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techXboxAlbum} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techXbox.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountXbox}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techXbox.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleXboxGallery1} src={techXboxAlbum.gallery1} alt="gallery"/>
                        <img onClick={toggleXboxGallery2} src={techXboxAlbum.gallery2} alt="gallery"/>
                        <img onClick={toggleXboxGallery3} src={techXboxAlbum.gallery3} alt="gallery"/>
                        <img onClick={toggleXboxGallery4} src={techXboxAlbum.gallery4} alt="gallery"/>
                        <img onClick={toggleXboxGallery5} src={techXboxAlbum.gallery5} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techXboxGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techXbox.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountXbox}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techXbox.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPXbox;
