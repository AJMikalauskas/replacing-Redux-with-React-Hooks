import React, {useContext} from 'react';
//import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
// using Products context API in here
//import {ProductsContext} from '../context/products-context';
import './Products.css';

//apply custom hook store below:
import { useStore } from "../hooks-store/store";

const Products = props => {
    // Redux
  // const productList = useSelector(state => state.shop.products);
    // Context API, make sure to remove dispatch things from ProductItem.js
      // So no error about favorite toggling
 // const productsListFromContext = useContext(ProductsContext).products;

 // Custom hook store usage here below:
  // gets both state and dispatch but really only need state, can also convert to const state = useStore()[0] if wanted 
    // and remove object destructuring -> use state.products as it's what is passed into initStore in products-store.js
  //const [state,dispatch] = useStore();
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
