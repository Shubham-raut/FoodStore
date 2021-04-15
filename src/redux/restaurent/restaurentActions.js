import axios from 'axios';

import {
    CURRENT_RES_REQUEST,
    CURRENT_RES_SUCCESS,
    CURRENT_RES_FAILURE,
    RES_MENU_REQUEST,
    RES_MENU_SUCCESS,
    RES_MENU_FAILURE,
} from './restaurentConstants';

const menu = [
  {
    dish_id: '104089345',
    name: 'Tomato Soup',
    price: '80 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F345.jpg?alt=media&token=efa0f3ce-dfc6-4440-ba52-efb87fcd01e5',
  },
  {
    dish_id: '104089346',
    name: 'Veg-Biryani',
    price: '250 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F358.jpg?alt=media&token=0005f859-fc94-499b-9d24-b15e9c073eeb',
  },
  {
    dish_id: '104089347',
    name: 'Mixed Vegetable Dhansak ',
    price: '149 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F935.jpg?alt=media&token=b32a2b85-3180-4ee8-88bd-2fa0433922b7',
  },
  {
    dish_id: '104089348',
    name: 'Mixed Vegetable Platterp',
    price: '160 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F400.jpg?alt=media&token=2e25a628-8601-4ed4-9ea1-8cdb83cdfca8',
  },
  {
    dish_id: '104089349',
    name: 'Tandoori Chicken',
    price: '360 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F357.jpg?alt=media&token=2e14d854-3fb1-4efb-8f99-296949ee908f',
  },
  {
    dish_id: '104089350',
    name: 'Boti Kabab',
    price: '400 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F346.jpg?alt=media&token=7efaa6af-6cb4-451d-a77f-5153560380d1',
  },
  {
    dish_id: '104089351',
    name: 'Paneer Tikka',
    price: '380 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F347.jpg?alt=media&token=1106b7c8-18cf-4b75-98db-3eb9ea75a197',
  },
  {
    dish_id: '104089352',
    name: 'Gobi Manchurian',
    price: '179 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F347.jpg?alt=media&token=1106b7c8-18cf-4b75-98db-3eb9ea75a197',
  },
  {
    dish_id: '104089353',
    name: 'Chicken Biryani ',
    price: '360 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F347.jpg?alt=media&token=1106b7c8-18cf-4b75-98db-3eb9ea75a197',
  },
  {
    dish_id: '104089354',
    name: 'Nav Ratton Korma ',
    price: '420 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F348.jpg?alt=media&token=2e455794-eb03-4c0e-a690-8d78ac4afbf7',
  },
  {
    dish_id: '104089355',
    name: 'Alu Paratha ',
    price: '120 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F348.jpg?alt=media&token=2e455794-eb03-4c0e-a690-8d78ac4afbf7',
  },
  {
    dish_id: '104089356',
    name: 'Kashmiri Naan ',
    price: '75 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F350.jpg?alt=media&token=a3255199-f118-4717-abfc-48bbf26f0cd4',
  },
  {
    dish_id: '104089357',
    name: 'Bread Basket',
    price: '180 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F351.jpg?alt=media&token=86f6f8ee-fac7-458f-baa2-ca1d57ac8c22',
  },
  {
    dish_id: '104089358',
    name: 'Gulab Jamun ',
    price: '220 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F354.jpg?alt=media&token=19d20a5a-be9e-407d-b288-916bbc0af905',
  },
  {
    dish_id: '104089359',
    name: 'Mango Pudding ',
    price: '190 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F351.jpg?alt=media&token=86f6f8ee-fac7-458f-baa2-ca1d57ac8c22',
  },
  {
    dish_id: '104089360',
    name: 'Baigan Bharta',
    price: '265 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F355.jpg?alt=media&token=5dec0cfd-defc-4ef8-9187-58e990d6ca2f',
  },
  {
    dish_id: '104089361',
    name: 'Chana Masala ',
    price: '209 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F356.jpg?alt=media&token=571f5771-bf25-4aae-bd3e-9508d62d5393',
  },
  {
    dish_id: '104089362',
    name: 'Shrimp Green Masala ',
    price: '340 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F359.jpg?alt=media&token=ad98446e-052a-45b8-bb2e-0bf2ca560e2d',
  },
  {
    dish_id: '104089363',
    name: 'Rogan Josh ',
    price: '120 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F360.jpg?alt=media&token=48c3b0ac-711e-4d88-b380-a768cb7a1822',
  },
  {
    dish_id: '104089364',
    name: 'Lemon Rice ',
    price: '170 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F361.jpg?alt=media&token=4f76d3fa-80b5-4e0d-a7df-255b973f5c72',
  },
  {
    dish_id: '104089365',
    name: 'Dal Makhani ',
    price: '295 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F383.jpg?alt=media&token=cfeca57b-535a-4df7-a9bf-0967fa1ee5cd',
  },
  {
    dish_id: '104089366',
    name: 'Tatarák zoustem',
    price: '305 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F382.jpg?alt=media&token=3f899dec-6854-4812-a01f-2a67b6c9b96d',
  },
  {
    dish_id: '10408935',
    name: 'samosa',
    price: '29 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F381.jpg?alt=media&token=1d03d112-da0a-4b61-bf1e-c722d9aba005',
  },
  {
    dish_id: '104089367',
    name: 'Quick Noodles',
    price: '300 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F380.jpg?alt=media&token=5d30b14b-db95-493e-b88f-31a87fb28d79',
  },
  {
    dish_id: '104089368',
    name: 'Szechwan Chilli Chicken',
    price: '245 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F379.jpg?alt=media&token=5c0d575a-3c17-4395-9ce7-24370f68230c',
  },
  {
    dish_id: '104089369',
    name: 'Spring Rolls',
    price: '178 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F378.jpeg?alt=media&token=07b702c6-0419-4bee-8383-a0d61f1583ef',
  },
  {
    dish_id: '104089370',
    name: 'Stir Fried Tofu with Rice',
    price: '107 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F377.jpg?alt=media&token=3ddb8d50-6c7c-4261-9688-3ffbbc97e51f',
  },
  {
    dish_id: '104089371',
    name: 'Honey Chilli Potato',
    price: '234 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F376.jpg?alt=media&token=02646b3e-7e3e-477d-9881-60d3f909e9ff',
  },
  {
    dish_id: '104089372',
    name: 'Peri Peri Chicken Satay',
    price: '321 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F375.jpg?alt=media&token=d9f6aab5-5dbb-4f03-bdeb-5dbcc2512d13',
  },
  {
    dish_id: '104089373',
    name: 'Cantonese Chicken Soup',
    price: '189 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F374.jpg?alt=media&token=6cd3093e-b2c8-4225-918a-acb5e914bf25',
  },
  {
    dish_id: '104089374',
    name: 'Veg Hakka Noodles',
    price: '176 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F373.jpg?alt=media&token=91ca2435-5df1-4095-b2bc-a723ff8091d6',
  },
  {
    dish_id: '104089375',
    name: 'Garlic Soya Chicken',
    price: '100 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F371.jpg?alt=media&token=a59bda1d-87bb-4268-8825-98b92e5b58da',
  },
  {
    dish_id: '104089376',
    name: 'Cheese Pizza',
    price: '255 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F370.jpg?alt=media&token=c5c97423-7706-4518-8318-ee6c50b79a05',
  },
  {
    dish_id: '104089377',
    name: 'Veggie Pizza',
    price: '215 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F369.jpg?alt=media&token=bb116c0f-dd12-428f-a5fc-65b47d72647d',
  },
  {
    dish_id: '104089378',
    name: 'Margherita Pizza',
    price: '238 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F368.JPG?alt=media&token=4c4b7df3-2b0e-4bb3-8bd8-fcd01f86c148',
  },
  {
    dish_id: '104089379',
    name: 'BBQ Chicken Pizza',
    price: '298 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F367.jpg?alt=media&token=c27c5dde-d5f8-4703-b234-ff97e1efdb76',
  },
  {
    dish_id: '104089380',
    name: 'Hawaiian Pizza',
    price: '295 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F365.jpg?alt=media&token=4a1380a2-7264-4405-aa14-840ae7f5b08b',
  },
  {
    dish_id: '104089381',
    name: 'Chicago Pizza',
    price: '217 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F364.jpg?alt=media&token=8438cc53-2dd1-45a5-a239-10c658ae8dc9',
  },
  {
    dish_id: '104089382',
    name: 'Beef Burger',
    price: '117 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F363.jpg?alt=media&token=b20ee759-c091-451b-8dd0-a7de642d66da',
  },
  {
    dish_id: '104089383',
    name: 'Veggie Burger',
    price: '69 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F362.jpg?alt=media&token=1e7fe9db-689c-4fa1-b8e1-dc56b2c48b96',
  },
  {
    dish_id: '104089384',
    name: 'Black Bean Burger',
    price: '105 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F935.jpg?alt=media&token=b32a2b85-3180-4ee8-88bd-2fa0433922b7',
  },
  {
    dish_id: '104089385',
    name: ' Green-Chile Burger',
    price: '145 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F400.jpg?alt=media&token=2e25a628-8601-4ed4-9ea1-8cdb83cdfca8',
  },
  {
    dish_id: '104089386',
    name: '  Minetta Burger',
    price: '137 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F398.jpg?alt=media&token=09eda2d7-03bb-41fd-8c2c-b3a7c49e379f',
  },
  {
    dish_id: '104089387',
    name: 'Plain Naan',
    price: '20 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F397.jpg?alt=media&token=9b6ee9ad-c843-47f8-be65-9296135cc661',
  },
  {
    dish_id: '104089388',
    name: 'Butter Naan',
    price: '37 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F395.jpg?alt=media&token=59b1da3f-ac7f-46c1-a332-527ed287573c',
  },
  {
    dish_id: '104089389',
    name: 'Laccha Naan',
    price: '40 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F394.jpg?alt=media&token=629e9d95-1646-4876-8fcf-1dfc4f54e418',
  },
  {
    dish_id: '104089390',
    name: 'Garlic Naan',
    price: '47 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F393.jpg?alt=media&token=98d452ce-22bb-4fec-8bed-49dc92053229',
  },
  {
    dish_id: '104089391',
    name: ' Paneer Naan',
    price: '55 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F392.jpg?alt=media&token=81b0b4bd-524e-4fd8-b9eb-c60d3688e78e',
  },
  {
    dish_id: '104089392',
    name: '  Pudina Naan',
    price: '47 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F391.jpg?alt=media&token=981818c5-ab95-4655-86ca-68eeb0a7f9d1',
  },
  {
    dish_id: '104089393',
    name: 'Rolled Ice Cream',
    price: '188 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F390.jpg?alt=media&token=0b71100f-0329-4d0b-a96e-e837f4584ff5',
  },
  {
    dish_id: '104089394',
    name: ' Soft Serve',
    price: '165 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F389.jpg?alt=media&token=2fa9cd42-e345-4151-9e4e-68d7eccad405',
  },
  {
    dish_id: '104089395',
    name: '  Frozen Yogurt',
    price: '87 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F388.jpg?alt=media&token=916d43ba-2a64-4d2e-aa96-809b1fa08746',
  },
  {
    dish_id: '104089396',
    name: ' Snow Cream',
    price: '79 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F386.jpg?alt=media&token=f1f5c340-388c-47da-84db-046715034405',
  },
  {
    dish_id: '104089397',
    name: ' Kulfi',
    price: '57 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F385.jpg?alt=media&token=9396ecea-570c-46e2-adbd-0956afbb2488',
  },
  {
    dish_id: '104089398',
    name: 'Sorbet',
    price: '136 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F384.jpg?alt=media&token=107100a2-c6a4-430e-94b5-638abb9d2f02',
  },
  {
    dish_id: '104089399',
    name: ' Regular Icecream',
    price: '48 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F385.jpg?alt=media&token=9396ecea-570c-46e2-adbd-0956afbb2488',
  },
  {
    dish_id: '104089400',
    name: ' Mixed blocks of icecream',
    price: '186 Rs',
    img:
      'https://firebasestorage.googleapis.com/v0/b/fodify-d1022.appspot.com/o/menuimg%2F385.jpg?alt=media&token=9396ecea-570c-46e2-adbd-0956afbb2488',
  },
];


export const axiosCall = (url) => {
    return axios.get(url, {
        headers: {
            "user-key": "7a77149c434216ebc2ae733a22ab3839",
        },
    })
}

export const currentResRequest = () => {
    return {
        type: CURRENT_RES_REQUEST
    }
}

export const currentResSuccess = (data) => {
    return {
        type: CURRENT_RES_SUCCESS,
        payload: data
    }
}

export const currentResFailure = (error) => {
    return {
        type: CURRENT_RES_FAILURE,
        payload: error
    }
}


export const resMenuRequest = () => {
    return {
        type: RES_MENU_REQUEST
    }
}

export const resMenuSuccess = (data) => {
    return {
        type: RES_MENU_SUCCESS,
        payload: data
    }
}

export const resMenuFailure = (error) => {
    return {
        type: RES_MENU_FAILURE,
        payload: error
    }
}


export const getCurrentRes = (resId) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`;

        dispatch(currentResRequest())
        axiosCall(url)
            .then((response) => {
                dispatch(currentResSuccess(response.data))
            })
            .catch(error => {
                dispatch(currentResFailure(error.message))
            });
    }
}

export const getResMenu = () => {
    return (dispatch) => {
        // let url = 'https://cors-anywhere.herokuapp.com/https://aamirmenusapi.herokuapp.com/menuitems';

        dispatch(resMenuRequest())
        // axiosCall(url)
        //     .then((response) => {
        //         dispatch(resMenuSuccess(response.data))
        //     })
        //     .catch(error => {
        //         dispatch(resMenuFailure(error.message))
        //     });
        dispatch(resMenuSuccess(menu));
    }
}
