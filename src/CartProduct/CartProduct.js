import React, {useState} from 'react';
import styles from '../Cart/Cart.module.css';
import {useStateValue} from "../StateProvider";

const CartProduct = ({id, name, description, gallery, amount, symbol}) => {

    const [{cart}, dispatch] = useStateValue();
    let [count, setCount] = useState(1);
    let [subtotal, setSubtotal] = useState(amount);

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    const increaseQty = () => {
        setCount(prevState => prevState + 1);
        if (count === 1){
            setSubtotal(amount += amount);
        } else {
            ++count;
            setSubtotal(subtotal = amount * count);
        }
    }

    const decreaseQty = () => {
        if (count === 1) {
            removeFromCart();
        } else {
            setCount(prevState => prevState - 1);
            setSubtotal(subtotal = subtotal - amount);
        }
    }

    return (
        <>
            <div className={styles.cart__product}>
                <div className={styles.cart__productLeft}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>
                        <strong>{symbol}{subtotal}</strong>
                    </p>
                </div>
                <div className={styles.cart__productRight}>
                    <div className={styles.cart__productRightCounter}>
                        <button onClick={increaseQty}>+</button>
                        <p>{count}</p>
                        <button onClick={decreaseQty}>-</button>
                    </div>
                    <div className={styles.cart__productRightImage}>
                        <img src={gallery} alt="gallery"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
