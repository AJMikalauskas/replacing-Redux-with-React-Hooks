import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
// This ProductsProvider is the context API in products-context.js
//import ProductsProvider from "./context/products-context";

// const rootReducer = combineReducers({
//   shop: productReducer
// });

//const store = createStore(rootReducer);

// This is the replacement of both redux and context API with just custom hook store
import configureStore from "./hooks-store/products-store";
configureStore();
 
ReactDOM.render(
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsProvider>
  ,
  document.getElementById('root')
);
