import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducer';

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import rootReducer from './rootReducer';

// if (process.env.NODE_ENV !== 'production') {
// //    const x= import('redux-devtools-extension').then(Module => Module.composeWithDevTools());
// }

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;


// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export const persistor = persistStore(store);

// // export default store;
// export default { store, persistor };