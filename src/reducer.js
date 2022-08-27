export const initialState = {
    cart: [],
    symbol: '$',

    amountNike: 144.69,
    amountJacket: 518.47,
    amountPS5: 844.02,
    amountXbox: 333.99,
    amountiMac: 1688.03,
    amountiPhone: 1000.76,
    amountAirPods: 300.23,
    amountAirTag: 120.57,

    data: {
        clothesNike: {
            id: 'huarache-x-stussy-le',
            name: 'Nike Air Huarache Le',
            inStock: true,
            gallery: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'
        },
        clothesJacket: {
            id: 'jacket-canada-goosee',
            name: 'Jacket',
            inStock: true,
            gallery: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg'
        },
        techPS5: {
            id: 'ps-5',
            name: 'PlayStation 5',
            inStock: false,
            gallery: 'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg'
        },
        techXbox: {
            id: 'xbox-series-s',
            name: 'Xbox Series S 512GB',
            inStock: false,
            gallery: 'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg'
        },
        techiMac: {
            id: 'apple-imac-2021',
            name: 'iMac 2021',
            inStock: true,
            gallery: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'
        },
        techiPhone: {
            id: 'apple-iphone-12-pro',
            name: 'iPhone 12 Pro',
            inStock: true,
            gallery: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'
        },
        techAirpods: {
            id: 'apple-airpods-pro',
            name: 'AirPods Pro',
            inStock: false,
            gallery: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'
        },
        techAirtag: {
            id: 'apple-airtag',
            name: 'AirTag',
            inStock: true,
            gallery: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
        }
    }

}

//Subtotal price calculation
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

//State management
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case 'SWITCH_TO_US_DOLLAR':
            return {
                ...state,
                symbol: action.symbol,
                amountNike: action.amountNike,
                amountJacket: action.amountJacket,
                amountPS5: action.amountPS5,
                amountXbox: action.amountXbox,
                amountiMac: action.amountiMac,
                amountiPhone: action.amountiPhone,
                amountAirPods: action.amountAirPods,
                amountAirTag: action.amountAirTag,
            }
        case 'SWITCH_TO_UK_POUND':
            return {
                ...state,
                symbol: action.symbol,
                amountNike: action.amountNike,
                amountJacket: action.amountJacket,
                amountPS5: action.amountPS5,
                amountXbox: action.amountXbox,
                amountiMac: action.amountiMac,
                amountiPhone: action.amountiPhone,
                amountAirPods: action.amountAirPods,
                amountAirTag: action.amountAirTag,
            }
        case 'SWITCH_TO_AU_DOLLAR':
            return {
                ...state,
                symbol: action.symbol,
                amountNike: action.amountNike,
                amountJacket: action.amountJacket,
                amountPS5: action.amountPS5,
                amountXbox: action.amountXbox,
                amountiMac: action.amountiMac,
                amountiPhone: action.amountiPhone,
                amountAirPods: action.amountAirPods,
                amountAirTag: action.amountAirTag,
            }
        case 'SWITCH_TO_JP_YEN':
            return {
                ...state,
                symbol: action.symbol,
                amountNike: action.amountNike,
                amountJacket: action.amountJacket,
                amountPS5: action.amountPS5,
                amountXbox: action.amountXbox,
                amountiMac: action.amountiMac,
                amountiPhone: action.amountiPhone,
                amountAirPods: action.amountAirPods,
                amountAirTag: action.amountAirTag,
            }
        case 'SWITCH_TO_RU_RUBLE':
            return {
                ...state,
                symbol: action.symbol,
                amountNike: action.amountNike,
                amountJacket: action.amountJacket,
                amountPS5: action.amountPS5,
                amountXbox: action.amountXbox,
                amountiMac: action.amountiMac,
                amountiPhone: action.amountiPhone,
                amountAirPods: action.amountAirPods,
                amountAirTag: action.amountAirTag,
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }

        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            index >= 0
                ? newCart.splice(index, 1)
                : console.warn(`Can't remove product (id: ${action.id}) as it is not in the Cart`)
            return {
                ...state,
                cart: newCart,
            }

        default:
            return state;
    }
}

export default reducer;
