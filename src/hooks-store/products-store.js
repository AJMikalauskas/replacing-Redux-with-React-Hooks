// Creating a concrete store
import { initStore } from "./store";

const configureStore = () => {
    const actions = {
        //action identifiers go here
            // get current state and return part of the state you want to update
            // used new favorite updatedProducts list logic from the other products-context.js file -> 
                // converted currentProdList to curState.products
                // also need productId in params list
        TOGGLE_FAV: (curState,productId) => {
                // 1. Find Index of product that is favorited/unfavorited
                    const prodIndex = curState.products.findIndex(
                    p => p.id === productId
                  );
                  console.log(prodIndex);
                  // 2. Change favorite status in toggle way by(!)
                  const newFavStatus = !curState.products[prodIndex].isFavorite;
                  // 3. create new updateProducts array with information from productsList
                  const updatedProducts = [...curState.products];
                  // 4. Change the product which has a change/toggled favorited, use(...) operator
                    // just change isFavorite to newFavStatus which is the toggle
                  updatedProducts[prodIndex] = {
                    ...curState.products[prodIndex],
                    isFavorite: newFavStatus
                  };
            return { products: curState.products };
        }
    }
    // pass in userActions and initial states to this
        // actions is above, and initialState is dummy data in products-context.js 
    initStore(actions, {products: [{
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }]});
};

export default configureStore;