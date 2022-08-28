import React from 'react';
import styles from './PLPHeader.module.css';
import {NavLink} from "react-router-dom";
import greenBagLogo from '../media/greenBagLogo.svg';
import cartLogo from '../media/emptyCart.svg';
import {gql, useQuery} from "@apollo/client";
import {useStateValue} from "../StateProvider";

const GET_ALL_NAME = gql`
  query {
  category{
    name
  }
}
`

const GET_CLOTHES_NAME = gql`
  query {
  category(input:{title:"clothes"}){
    name
  }
}
`

const GET_TECH_NAME = gql`
  query {
  category(input:{title:"tech"}){
    name
  }
}
`

const DisplayAllName = () => {
    const {loading, error, data} = useQuery(GET_ALL_NAME);
    if (loading) return <p>LOADING ALL...</p>;
    if (error) return <p>ERROR IN ALL!</p>;

    return <p>{data.category.name}</p>
}

const DisplayClothesName = () => {
    const {loading, error, data} = useQuery(GET_CLOTHES_NAME);
    if (loading) return <p>LOADING CLOTHES...</p>;
    if (error) return <p>ERROR IN CLOTHES!</p>;

    return <p>{data.category.name}</p>
}

const DisplayTechName = () => {
    const {loading, error, data} = useQuery(GET_TECH_NAME);
    if (loading) return <p>LOADING TECH...</p>;
    if (error) return <p>ERROR IN TECH!</p>;

    return <p>{data.category.name}</p>
}

const PLPHeader = () => {

    const [{symbol}, dispatch] = useStateValue();

    const displayModalSwitcher = () => {
        const modalSwitcher = document.querySelector('.modalSwitcher');
        modalSwitcher.style.display = 'block';
    }

    const minimizeModalSwitcher = () => {
        const modalSwitcher = document.querySelector('.modalSwitcher');
        modalSwitcher.style.display = 'none';
    }

    const switchToUSDollar = () => {
        dispatch({
            type: 'SWITCH_TO_US_DOLLAR',
            symbol: '$',
            amountNike: 144.69,
            amountJacket: 518.47,
            amountPS5: 844.02,
            amountXbox: 333.99,
            amountiMac: 1688.03,
            amountiPhone: 1000.76,
            amountAirPods: 300.23,
            amountAirTag: 120.57,
        })
    }

    const switchToUKPound = () => {
        dispatch({
            type: 'SWITCH_TO_UK_POUND',
            symbol: '£',
            amountNike: 104,
            amountJacket: 372.67,
            amountPS5: 606.67,
            amountXbox: 240.07,
            amountiMac: 1213.34,
            amountiPhone: 719.34,
            amountAirPods: 215.8,
            amountAirTag: 86.67,
        })
    }

    const switchTOAUDollar = () => {
        dispatch({
            type: 'SWITCH_TO_AU_DOLLAR',
            symbol: 'A$',
            amountNike: 186.65,
            amountJacket: 668.83,
            amountPS5: 1088.79,
            amountXbox: 430.85,
            amountiMac: 2177.57,
            amountiPhone: 1290.99,
            amountAirPods: 387.3,
            amountAirTag: 155.54,
        })
    }

    const switchToJPYen = () => {
        dispatch({
            type: 'SWITCH_TO_JP_YEN',
            symbol: '¥',
            amountNike: 15625.24,
            amountJacket: 55990.46,
            amountPS5: 91147.25,
            amountXbox: 36068.27,
            amountiMac: 182294.51,
            amountiPhone: 108074.6,
            amountAirPods: 32422.38,
            amountAirTag: 13021.04,
        })
    }

    const switchToRURuble = () => {
        dispatch({
            type: 'SWITCH_TO_RU_RUBLE',
            symbol: '₽',
            amountNike: 10941.76,
            amountJacket: 39207.96,
            amountPS5: 63826.91,
            amountXbox: 25257.22,
            amountiMac: 127653.82,
            amountiPhone: 75680.48,
            amountAirPods: 22704.14,
            amountAirTag: 9118.13,
        })
    }

    return (
        <>
            <div className={styles.PLPNav}>
                <div className={styles.PLPNavLeft}>
                    <NavLink to="/">
                        <DisplayAllName/>
                    </NavLink>
                    <NavLink to="/clothes">
                        <DisplayClothesName/>
                    </NavLink>
                    <NavLink to="/tech">
                        <DisplayTechName/>
                    </NavLink>
                </div>
                <div className={styles.PLPNavCenter}>
                    <img
                        className={styles.logo}
                        src={greenBagLogo}
                        alt="green-bag-logo"/>
                </div>
                <div className={styles.PLPNavRight}>
                    <button
                        onClick={displayModalSwitcher}>
                        CURRENCY SWITCHER
                    </button>
                    <NavLink to="/cart">
                        <img
                            src={cartLogo}
                            alt="cart-logo"/>
                    </NavLink>
                </div>
            </div>
            <div className='modalSwitcher'>
                <div className='modalSwitcher__sub'>
                    <span
                        onClick={minimizeModalSwitcher}
                        className='minimizer'>
                        &#10006;
                    </span>
                    <span onClick={switchToUSDollar} className='symbol'>$ USD</span>
                    <span onClick={switchToUKPound} className='symbol'>£ GBP</span>
                    <span onClick={switchTOAUDollar} className='symbol'>A$ AUD</span>
                    <span onClick={switchToJPYen} className='symbol'>¥ JPY</span>
                    <span onClick={switchToRURuble} className='symbol'>₽ RUB</span>
                </div>
            </div>
        </>
    );
};

export default PLPHeader;
