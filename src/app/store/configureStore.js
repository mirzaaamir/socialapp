import { createStore , applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer'

export const configureStore =(preloadedState) => {
    const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancer = [middlewareEnhancer];
const composeEnhancer = composeWithDevTools(...storeEnhancer);
const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancer
);

if(process.env.NODE_ENV !== 'production'){
    if(module.hot) {
        module.hot.accept('../reducers/rootReducer.js' , () => {
            const newRootREducer = require('../reducers/rootReducer').default;
            store.replaceReducer(newRootREducer)
        })
    }
}
    return store

}

