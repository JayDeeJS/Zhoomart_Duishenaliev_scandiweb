import React from 'react';
import PLPProduct from "../PLPProduct/PLPProduct";
import {useStateValue} from "../StateProvider";

const PLPAll = () => {
    const [{
        data,
        amountNike,
        amountJacket,
        amountPS5,
        amountXbox,
        amountiMac,
        amountiPhone,
        amountAirPods,
        amountAirTag,
        symbol
    }] = useStateValue();

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
            <PLPProduct
                id={data.techPS5.id}
                name={data.techPS5.name}
                inStock={data.techPS5.inStock}
                symbol={symbol}
                amount={amountPS5}
                gallery={data.techPS5.gallery}
            />
            <PLPProduct
                id={data.techXbox.id}
                name={data.techXbox.name}
                inStock={data.techXbox.inStock}
                symbol={symbol}
                amount={amountXbox}
                gallery={data.techXbox.gallery}
            />
            <PLPProduct
                id={data.techiMac.id}
                name={data.techiMac.name}
                inStock={data.techiMac.inStock}
                symbol={symbol}
                amount={amountiMac}
                gallery={data.techiMac.gallery}
            />
            <PLPProduct
                id={data.techiPhone.id}
                name={data.techiPhone.name}
                inStock={data.techiPhone.inStock}
                symbol={symbol}
                amount={amountiPhone}
                gallery={data.techiPhone.gallery}
            />
            <PLPProduct
                id={data.techAirpods.id}
                name={data.techAirpods.name}
                inStock={data.techAirpods.inStock}
                symbol={symbol}
                amount={amountAirPods}
                gallery={data.techAirpods.gallery}
            />
            <PLPProduct
                id={data.techAirtag.id}
                name={data.techAirtag.name}
                inStock={data.techAirtag.inStock}
                symbol={symbol}
                amount={amountAirTag}
                gallery={data.techAirtag.gallery}
            />
        </div>
    );
};

export default PLPAll;
