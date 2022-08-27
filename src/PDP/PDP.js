import React from 'react';
import styles from './PDP.module.css';
import {useParams} from "react-router-dom";
import {useStateValue} from "../StateProvider";

const PDP = () => {
    const [{}, dispatch] = useStateValue();

    const {id, name, price, symbol} = useParams();
    console.log(id, name, price, symbol)

    return (
        <div style={{width:"100%", height:"100%"}}>
            <p>{id}</p>
            <p>{name}</p>
            <span>{symbol}</span>
            <p>{price}</p>
        </div>
    );
};

export default PDP;
