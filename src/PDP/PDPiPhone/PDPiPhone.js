import React from 'react';
import {useStateValue} from "../../StateProvider";
import toast from "react-hot-toast";

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

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: techiPhone.id,
                name: techiPhone.name,
                gallery: techiPhoneGallery,
                description: techiPhone.description,
                amount: amountiPhone,
                symbol: symbol,
            }
        })
        toast.success(`${techiPhone.name} has been added to your Cart!`, {
            style: {
                border: '2px solid lightgreen',
                padding: '16px',
                color: 'green',
            },
            iconTheme: {
                primary: '#14e040',
                secondary: '#e7f13b',
            },
        });
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
                    <button onClick={addToCart}>ADD TO CART</button>
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
