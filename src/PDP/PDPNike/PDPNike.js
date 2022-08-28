import React from 'react';
import {useStateValue} from "../../StateProvider";

const PDPNike = () => {
    const [{clothesNikeAlbum, clothesNike, amountNike, symbol}] = useStateValue();

    return (
        <div className="PDP__product">
            <div className="PDP__productImage">
                <img src={clothesNike.gallery} alt="nike-gallery"/>
            </div>
            <div className="PDP__productInfo">
                <h3>{clothesNike.name}</h3>
                <p>Size:</p>
                <p>Color:</p>
                <p>Price:</p>
                <p>{symbol}{amountNike}</p>
                <button>ADD TO CART</button>
                <p>{clothesNike.description}</p>
            </div>
        </div>
    );
};

export default PDPNike;
