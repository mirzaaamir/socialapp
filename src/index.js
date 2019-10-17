import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  ReduxToastr from 'react-redux-toastr';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './app/layout/App.jsx';
import * as serviceWorker from './serviceWorker';
import  { configureStore } from './app/store/configureStore';
import ScrollToTop  from './app/common/util/ScrollToTop';


const store = configureStore();


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter> 
        <ScrollToTop>
            <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            taransitionOut='fadeOut'
            />
        <App />
        </ScrollToTop>
       
        </BrowserRouter>
        </Provider>
    
    , document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
