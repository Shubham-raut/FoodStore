import { combineReducers } from 'redux';
import restaurentReducer from './restaurent/restaurentReducer';
import authReducer from './auth/authReducer';
import cityReducer from './city/cityReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    cityState: cityReducer,
    restaurentState: restaurentReducer,
    cartState: cartReducer,
})

export default rootReducer;