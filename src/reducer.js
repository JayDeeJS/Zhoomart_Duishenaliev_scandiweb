export const initialState = {
    cart: [],
    subtotal: 0,

    symbol: '$',

    amountNike: 144.69,
    amountJacket: 518.47,
    amountPS5: 844.02,
    amountXbox: 333.99,
    amountiMac: 1688.03,
    amountiPhone: 1000.76,
    amountAirpods: 300.23,
    amountAirtag: 120.57,

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

    techPS5Album: {
        gallery1: "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
        gallery2: "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
        gallery3: "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
        gallery4: "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
        gallery5: "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    },

    techXboxAlbum: {
        gallery1: "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
        gallery2: "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
        gallery3: "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
        gallery4: "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
        gallery5: "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
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
        inStock: false,
    },
    techXbox: {
        id: 'xbox-series-s',
        name: 'Xbox Series S 512GB',
        inStock: false,
    },
    techiMac: {
        id: 'apple-imac-2021',
        name: 'iMac 2021',
        description: 'The new iMac!',
        inStock: true,
    },
    techiPhone: {
        id: 'apple-iphone-12-pro',
        name: 'iPhone 12 Pro',
        description: 'This is iPhone 12. Nothing else to say.',
        inStock: true,
    },
    techAirpods: {
        id: 'apple-airpods-pro',
        name: 'AirPods Pro',
        description: 'Magic like you’ve never heard. AirPods Pro have been designed to deliver.' +
            'Active Noise Cancellation for immersive sound, Transparency mode so you can hear your' +
            'surroundings, and a customizable fit for all-day comfort.' +
            'Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch.' +
            'And they’re ready to use right out of the case. Active Noise Cancellation.' +
            'Incredibly light noise-cancelling headphones, AirPods Pro block out your environment' +
            'so you can focus on what you’re listening to. AirPods Pro use two microphones,' +
            'an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation.' +
            'By continuously adapting to the geometry of your ear and the fit of the ear tips,' +
            'Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts,' +
            'and calls. Transparency mode. Switch to Transparency mode and AirPods Pro let the outside sound in,' +
            'allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones' +
            'enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and' +
            'feel natural, like when you’re talking to people around you. All-new design.' +
            'AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from.' +
            'With an internal taper, they conform to the shape of your ear, securing your AirPods Pro' +
            'in place and creating an exceptional seal for superior noise cancellation. Amazing audio quality.' +
            'A custom-built high-excursion, low-distortion driver delivers powerful bass.' +
            'A super-efficient high dynamic range amplifier produces pure, incredibly clear sound' +
            'while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape' +
            'of your ear for a rich, consistent listening experience. Even more magical.' +
            'The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the' +
            'stem makes it easy to control music and calls and switch between.' +
            'Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option' +
            'to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend' +
            'can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie,' +
            'or listen to a song together.',
        inStock: false,
    },
    techAirtag: {
        id: 'apple-airtag',
        name: 'AirTag',
        description: 'Lose your knack for losing things. ' +
            'AirTag is an easy way to keep track of your stuff.' +
            'Attach one to your keys, slip another one in your backpack.' +
            'And just like that, they’re on your radar in the Find My app. AirTag has your back.',
        inStock: true,
    }

}

//Subtotal price calculation
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.amount + item, 0);

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
                amountAirpods: action.amountAirpods,
                amountAirtag: action.amountAirtag,
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
                amountAirpods: action.amountAirpods,
                amountAirtag: action.amountAirtag,
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
                amountAirpods: action.amountAirpods,
                amountAirtag: action.amountAirtag,
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
                amountAirpods: action.amountAirpods,
                amountAirtag: action.amountAirtag,
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
                amountAirpods: action.amountAirpods,
                amountAirtag: action.amountAirtag,
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

        case 'TOGGLE_PS5_GALLERY1':
            return {
                ...state,
                techPS5Gallery: action.techPS5Gallery
            }

        case 'TOGGLE_PS5_GALLERY2':
            return {
                ...state,
                techPS5Gallery: action.techPS5Gallery
            }

        case 'TOGGLE_PS5_GALLERY3':
            return {
                ...state,
                techPS5Gallery: action.techPS5Gallery
            }

        case 'TOGGLE_PS5_GALLERY4':
            return {
                ...state,
                techPS5Gallery: action.techPS5Gallery
            }

        case 'TOGGLE_PS5_GALLERY5':
            return {
                ...state,
                techPS5Gallery: action.techPS5Gallery
            }

        case 'TOGGLE_XBOX_GALLERY1':
            return {
                ...state,
                techXboxGallery: action.techXboxGallery
            }

        case 'TOGGLE_XBOX_GALLERY2':
            return {
                ...state,
                techXboxGallery: action.techXboxGallery
            }

        case 'TOGGLE_XBOX_GALLERY3':
            return {
                ...state,
                techXboxGallery: action.techXboxGallery
            }

        case 'TOGGLE_XBOX_GALLERY4':
            return {
                ...state,
                techXboxGallery: action.techXboxGallery
            }

        case 'TOGGLE_XBOX_GALLERY5':
            return {
                ...state,
                techXboxGallery: action.techXboxGallery
            }

        case 'TOGGLE_IMAC_GALLERY1':
            return {
                ...state,
                techiMacGallery: action.techiMacGallery
            }

        case 'TOGGLE_IPHONE_GALLERY1':
            return {
                ...state,
                techiPhoneGallery: action.techiPhoneGallery
            }

        case 'TOGGLE_AIRPODS_GALLERY1':
            return {
                ...state,
                techAirpodsGallery: action.techAirpodsGallery
            }

        case 'TOGGLE_AIRTAG_GALLERY1':
            return {
                ...state,
                techAirtagGallery: action.techAirtagGallery
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

        case 'COUNT_SUBTOTAL':
            return {
                ...state,
                subtotal: [...state.subtotal, action.item],
            }

        default:
            return state;
    }
}

export default reducer;
