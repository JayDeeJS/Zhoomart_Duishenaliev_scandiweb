import React from 'react';
import PLPProduct from "../PLPProduct/PLPProduct";
import {useStateValue} from "../StateProvider";
import {Link} from "react-router-dom";

const PLPTech = () => {
    const [{
        techPS5, amountPS5,
        techXbox, amountXbox,
        techiMac, amountiMac,
        techiPhone, amountiPhone,
        techAirpods, amountAirPods,
        techAirtag, amountAirTag, symbol
    }] = useStateValue();

    return (
        <div className="PLP">
            <h2>TECH</h2>
            <div className="PLP__products">
                <Link to={`pdp/${techPS5.id}`}>
                    <PLPProduct
                        id={techPS5.id}
                        name={techPS5.name}
                        inStock={techPS5.inStock}
                        symbol={symbol}
                        amount={amountPS5}
                        gallery={techPS5.gallery}
                    />
                </Link>
                <Link to={`pdp/${techXbox.id}`}>
                    <PLPProduct
                        id={techXbox.id}
                        name={techXbox.name}
                        inStock={techXbox.inStock}
                        symbol={symbol}
                        amount={amountXbox}
                        gallery={techXbox.gallery}
                    />
                </Link>
                <Link to={`pdp/${techiMac.id}`}>
                    <PLPProduct
                        id={techiMac.id}
                        name={techiMac.name}
                        inStock={techiMac.inStock}
                        symbol={symbol}
                        amount={amountiMac}
                        gallery={techiMac.gallery}
                    />
                </Link>
                <Link to={`pdp/${techiPhone.id}`}>
                    <PLPProduct
                        id={techiPhone.id}
                        name={techiPhone.name}
                        inStock={techiPhone.inStock}
                        symbol={symbol}
                        amount={amountiPhone}
                        gallery={techiPhone.gallery}
                    />
                </Link>
                <Link to={`pdp/${techAirpods.id}`}>
                    <PLPProduct
                        id={techAirpods.id}
                        name={techAirpods.name}
                        inStock={techAirpods.inStock}
                        symbol={symbol}
                        amount={amountAirPods}
                        gallery={techAirpods.gallery}
                    />
                </Link>
                <Link to={`pdp/${techAirtag.id}`}>
                    <PLPProduct
                        id={techAirtag.id}
                        name={techAirtag.name}
                        inStock={techAirtag.inStock}
                        symbol={symbol}
                        amount={amountAirTag}
                        gallery={techAirtag.gallery}
                    />
                </Link>
            </div>
        </div>
    );
};

export default PLPTech;
