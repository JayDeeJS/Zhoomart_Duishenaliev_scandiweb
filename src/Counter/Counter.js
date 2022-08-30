import React, {useContext, useEffect} from 'react';
import {Context} from "../context";
import {useStateValue} from "../StateProvider";
import styles from '../Cart/Cart.module.css';

const Counter = ({ name, description, gallery, amount, symbol}) => {

    const [{cart, id}, dispatch] = useStateValue();

    /*const increaseQty = () => {
        dispatch({
            type: 'INCREASE_QTY',
            qty: qty + 1,
        })
    }

    const decreaseQty = () => {
        if (qty === 0){
            return qty;
        }

        dispatch({
            type: 'DECREASE_QTY',
            qty: qty - 1,
        })
    }*/

    /*const {count, setCount} = useContext(Context);

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    const increaseQty = () => {
        setCount(prevState => prevState + 1);
    }

    const decreaseQty = () => {
        (count === 0)
            ? removeFromCart()
            : setCount(prevState => prevState - 1)
        console.log(id)
    }*/

    return (
        <div className={styles.cart__productRightCounter}>
            {/*<button onClick={increaseQty}>+</button>
            <p>{count}</p>
            <button onClick={decreaseQty}>-</button>*/}
        </div>
    );
};

export default Counter;
