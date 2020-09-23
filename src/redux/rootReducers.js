import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cakeReducer from './Cake/CakeReducer';
import iceCreamReducer from './IceCream/IceCreamReducer';
import userReducer from './user/userReducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cake']
// }

const rootReducer = combineReducers({
    // cake: cakeReducer,
    // iceCream: iceCreamReducer,
    // user: userReducer
})

export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);