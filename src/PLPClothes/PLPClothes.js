import React from 'react';
import PLPProduct from "../PLPProduct/PLPProduct";
import {useStateValue} from "../StateProvider";
import {Link} from "react-router-dom";

const PLPClothes = () => {
    const [{
        clothesNike, clothesNikeGallery, amountNike,
        clothesJacket, clothesJacketGallery, amountJacket, symbol
    }] = useStateValue();

    return (
        <div className="PLP">
            <h2>CLOTHES</h2>
            <div className="PLP__products">
                <Link to={`pdp/${clothesNike.id}`}>
                    <PLPProduct
                        id={clothesNike.id}
                        name={clothesNike.name}
                        inStock={clothesNike.inStock}
                        symbol={symbol}
                        amount={amountNike}
                        gallery={clothesNikeGallery}
                    />
                </Link>
                <Link to={`pdp/${clothesJacket.id}`}>
                    <PLPProduct
                        id={clothesJacket.id}
                        name={clothesJacket.name}
                        inStock={clothesJacket.inStock}
                        symbol={symbol}
                        amount={amountJacket}
                        gallery={clothesJacketGallery}
                    />
                </Link>
            </div>
        </div>
    );
};

export default PLPClothes;
