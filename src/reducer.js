export const initialState = {
    cart: [],
    product: [],
    symbol: '$',

    amountNike: 144.69,
    amountJacket: 518.47,
    amountPS5: 844.02,
    amountXbox: 333.99,
    amountiMac: 1688.03,
    amountiPhone: 1000.76,
    amountAirPods: 300.23,
    amountAirTag: 120.57,

    clothesNikeAlbum: {
        gallery1: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
        gallery2: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
        gallery3: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
        gallery4: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
        gallery5: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
    },

    clothesJacketAlbum: {
        gallery1: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
        gallery2: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
        gallery3: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
        gallery4: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
        gallery5: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
        gallery6: "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
        gallery7: "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    },

    clothesNikeGallery: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
    clothesJacketGallery: "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
    techPS5Gallery: "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
    techXboxGallery: "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
    techiMacGallery: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    techiPhoneGallery: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    techAirpodsGallery: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    techAirtagGallery: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",

    clothesNike: {
        id: 'huarache-x-stussy-le',
        name: 'Nike Air Huarache Le',
        description: 'Great sneakers for everyday use!',
        inStock: true,
    },
    clothesJacket: {
        id: 'jacket-canada-goosee',
        name: 'Jacket',
        description: 'Awesome winter jacket!',
        inStock: true,
    },
    techPS5: {
        id: 'ps-5',
        name: 'PlayStation 5',
        description: '',
        inStock: false,
    },
    techXbox: {
        id: 'xbox-series-s',
        name: 'Xbox Series S 512GB',
        description: '',
        inStock: false,
    },
    techiMac: {
        id: 'apple-imac-2021',
        name: 'iMac 2021',
        description: '',
        inStock: true,
    },
    techiPhone: {
        id: 'apple-iphone-12-pro',
        name: 'iPhone 12 Pro',
        description: '',
        inStock: true,
    },
    techAirpods: {
        id: 'apple-airpods-pro',
        name: 'AirPods Pro',
        description: '',
        inStock: false,
    },
    techAirtag: {
        id: 'apple-airtag',
        name: 'AirTag',
        description: '',
        inStock: true,
    }

}

//Subtotal price calculation
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

//State management
const reducer = (state, action) => {

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

        case 'TOGGLE_NIKE_GALLERY1':
            return {
                ...state,
                clothesNikeGallery: action.clothesNikeGallery
            }

        case 'TOGGLE_NIKE_GALLERY2':
            return {
                ...state,
                clothesNikeGallery: action.clothesNikeGallery
            }

        case 'TOGGLE_NIKE_GALLERY3':
            return {
                ...state,
                clothesNikeGallery: action.clothesNikeGallery
            }

        case 'TOGGLE_NIKE_GALLERY4':
            return {
                ...state,
                clothesNikeGallery: action.clothesNikeGallery
            }

        case 'TOGGLE_NIKE_GALLERY5':
            return {
                ...state,
                clothesNikeGallery: action.clothesNikeGallery
            }

        case 'TOGGLE_JACKET_GALLERY1':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY2':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY3':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY4':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY5':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY6':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
            }

        case 'TOGGLE_JACKET_GALLERY7':
            return {
                ...state,
                clothesJacketGallery: action.clothesJacketGallery
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
