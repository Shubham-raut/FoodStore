import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import restaurentReducer from './restaurent/restaurentReducer';
import authReducer from './auth/authReducer';
import cityReducer from './city/cityReducer';
import cartReducer from './cart/cartReducer';


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cake']
// }

// const reducer = { cityReducer, authReducer, restaurentReducer };

const rootReducer = combineReducers({
    authState: authReducer,
    cityState: cityReducer,
    restaurentState: restaurentReducer,
    cartState: cartReducer
})

export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);