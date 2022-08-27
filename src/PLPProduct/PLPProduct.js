import React from 'react';
import {Link} from 'react-router-dom';

const PLPProduct = ({id, name, gallery, amount, symbol, inStock}) => {

    return (
        inStock === true
            ? <div key={id} className="PLPProduct">
                <Link to={`/pdp/${id}/${name}/${amount}/${symbol}`}>
                    <div className="PLPProduct__sub">
                        <img src={gallery} alt="product-gallery"/>
                        <div className="PLPProduct__subAlign">
                            <p>{name}</p>
                            <p>
                                <strong>{symbol}{amount}</strong>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            : <div key={id} className="PLPProduct__outOfStock">
                <div className="PLPProduct__sub">
                    <img src={gallery} alt="product-gallery"/>
                    <div className="PLPProduct__subAlign">
                        <p>{name}</p>
                        <p>
                            <strong>{symbol}{amount}</strong>
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default PLPProduct;
