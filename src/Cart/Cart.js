import React from 'react';
import styles from './Cart.module.css';
import {useStateValue} from "../StateProvider";
import CartProduct from "../CartProduct/CartProduct";

const Cart = () => {
    const [{cart}, dispatch] = useStateValue();

    const addToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        let result = localStorage.getItem('cart');
        console.log(result);
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart__frame}>
                <h2>Cart</h2>
                {cart?.length === 0
                    ? <div>
                        <h3>Cart is empty</h3>
                    </div>
                    : <>
                        <div className={styles.cart__card}>
                            {cart?.map(item => (
                                <CartProduct
                                    key={item.index}
                                    id={item.id}
                                    name={item.name}
                                    gallery={item.gallery}
                                    description={item.description}
                                    amount={item.amount}
                                    symbol={item.symbol}
                                />
                            ))}
                        </div>
                        <h3>Quantity: {}</h3>
                        <h3>Total: {}</h3>
                        <button
                            onClick={addToLocalStorage}
                            className={styles.cart__cardButton}>
                            ORDER
                        </button>
                    </>}
            </div>
        </div>

    );
};

export default Cart;
