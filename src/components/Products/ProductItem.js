// Context API
import React, {useContext} from 'react';
//import {ProductsContext} from '../../context/products-context';
//import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
//import { toggleFav } from '../../store/actions/products';

// useStore custom hook to replace context API and redux
import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo(props => {

  // This shows us that each item when the favorite button is clicked, all 4 items are rerendered
    // useStore calls useState which renders the entire globalState again.
  console.log('RENDERING');
  //const dispatch = useDispatch();
  //Context API Hook below:
  //const toggleFav = useContext(ProductsContext).toggleFav;

  // where the dispatch is used such as here, use react.memo and pass in false as the shouldListen variable
    // Will only rerender the whole listeners array if shouldListen is true, which only happens if using state from return 
      //false is passed in for shouldListen if dispatch is used because listeners is unneeded
  const dispatch = useStore(false)[1];
  const toggleFavHandler = () => {
   // dispatch(toggleFav(props.id));
   // Sends in id to find the index and then change the property of isFavorite in the indexed object
   //toggleFav(props.id);

   //TOGGLE_FAV from products-store.js 
   dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
