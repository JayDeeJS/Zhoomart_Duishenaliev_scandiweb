import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPNike = () => {
    const [{clothesNikeAlbum, clothesNikeGallery, clothesNike, amountNike, symbol}, dispatch] = useStateValue();

    const toggleNikeGallery1 = () => {
        dispatch({
            type: 'TOGGLE_NIKE_GALLERY1',
            clothesNikeGallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
        })
    }

    const toggleNikeGallery2 = () => {
        dispatch({
            type: 'TOGGLE_NIKE_GALLERY2',
            clothesNikeGallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
        })
    }

    const toggleNikeGallery3 = () => {
        dispatch({
            type: 'TOGGLE_NIKE_GALLERY3',
            clothesNikeGallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
        })
    }

    const toggleNikeGallery4 = () => {
        dispatch({
            type: 'TOGGLE_NIKE_GALLERY4',
            clothesNikeGallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
        })
    }

    const toggleNikeGallery5 = () => {
        dispatch({
            type: 'TOGGLE_NIKE_GALLERY5',
            clothesNikeGallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087',
        })
    }

    return (
        <div className="PDP__product">
            <div className="PDP__productImage">
                <div className="PDP__productAlbum">
                    <img onClick={toggleNikeGallery1} src={clothesNikeAlbum.gallery1} alt="gallery"/>
                    <img onClick={toggleNikeGallery2} src={clothesNikeAlbum.gallery2} alt="gallery"/>
                    <img onClick={toggleNikeGallery3} src={clothesNikeAlbum.gallery3} alt="gallery"/>
                    <img onClick={toggleNikeGallery4} src={clothesNikeAlbum.gallery4} alt="gallery"/>
                    <img onClick={toggleNikeGallery5} src={clothesNikeAlbum.gallery5} alt="gallery"/>
                </div>
                <div className="PDP__productHighlightedImage">
                    <img src={clothesNikeGallery} alt="gallery"/>
                </div>
            </div>
            <div className="PDP__productInfo">
                <h3>{clothesNike.name}</h3>
                <p>Size:</p>
                <p>Color:</p>
                <p>
                    <strong>Price: {symbol}{amountNike}</strong>
                </p>
                <button>ADD TO CART</button>
                <p>{clothesNike.description}</p>
            </div>
        </div>
    );
};

export default PDPNike;
