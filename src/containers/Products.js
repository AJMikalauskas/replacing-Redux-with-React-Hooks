import React, {useContext} from 'react';
//import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
// using Products context API in here
import {ProductsContext} from '../context/products-context';
import './Products.css';

const Products = props => {
    // Redux
  // const productList = useSelector(state => state.shop.products);
    // Context API, make sure to remove dispatch things from ProductItem.js
      // So no error about favorite toggling
  const productsListFromContext = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {productsListFromContext.map(prod => (
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
