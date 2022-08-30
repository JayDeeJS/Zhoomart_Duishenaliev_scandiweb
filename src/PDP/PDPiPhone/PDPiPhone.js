import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPiPhone = () => {
    const [{
        techiPhoneGallery,
        techiPhone, amountiPhone, symbol
    }, dispatch] = useStateValue();

    const toggleiPhoneGallery1 = () => {
        dispatch({
            type: 'TOGGLE_IPHONE_GALLERY1',
            techiPhoneGallery: techiPhoneGallery,
        })
    }

    return (
        techiPhone.inStock === true
            ? <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleiPhoneGallery1} src={techiPhoneGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techiPhoneGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techiPhone.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountiPhone}</strong>
                    </p>
                    <button>ADD TO CART</button>
                    <p>{techiPhone.description}</p>
                </div>
            </div>
            : <div className="PDP__product">
                <div className="PDP__productImage">
                    <div className="PDP__productAlbum">
                        <img onClick={toggleiPhoneGallery1} src={techiPhoneGallery} alt="gallery"/>
                    </div>
                    <div className="PDP__productHighlightedImage">
                        <img src={techiPhoneGallery} alt="gallery"/>
                    </div>
                </div>
                <div className="PDP__productInfo">
                    <h3>{techiPhone.name}</h3>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p className="PDP__price">
                        <strong>Price: {symbol}{amountiPhone}</strong>
                    </p>
                    <h3 className="PDP__productInfoNoStock">WHOOPS... {techiPhone.name} IS NOT IN STOCK</h3>
                </div>
            </div>
    );
};

export default PDPiPhone;
