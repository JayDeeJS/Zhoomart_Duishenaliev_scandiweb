import React from 'react';
import PLPProduct from "../PLPProduct/PLPProduct";
import {useStateValue} from "../StateProvider";

const PLPClothes = () => {
    const [{data, amountNike, amountJacket, symbol}] = useStateValue();

    return (
        <div className="PLP">
            <PLPProduct
                id={data.clothesNike.id}
                name={data.clothesNike.name}
                inStock={data.clothesNike.inStock}
                symbol={symbol}
                amount={amountNike}
                gallery={data.clothesNike.gallery}
            />
            <PLPProduct
                id={data.clothesJacket.id}
                name={data.clothesJacket.name}
                inStock={data.clothesJacket.inStock}
                symbol={symbol}
                amount={amountJacket}
                gallery={data.clothesJacket.gallery}
            />
        </div>
    );
};

export default PLPClothes;
