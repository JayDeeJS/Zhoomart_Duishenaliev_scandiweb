import React from 'react';
import {useParams} from "react-router-dom";
import {useStateValue} from "../StateProvider";

const PDP = () => {
    const [{clothesNikeAlbum, clothesNike, amountNike, symbol}] = useStateValue();

    return (
        <div style={{width:"100%", height:"100%"}}>
            <p>{}</p>
            <p>{}{}</p>
        </div>
    );
};

export default PDP;
