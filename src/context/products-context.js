 import React, {useState} from "react";

 // Will call .provider later when this is used
    // Put in dummy data into initial context here which the dummy data is from >reducers folder>products.js
export const ProductsContext =  React.createContext({
    products: [],
    toggleFav: (productId) => { }
});


 // Will call .provider here, add functions, useEffect and value property to the .provider tags
export default props => {
    // productsList is the value in the kvp of the value property object passed into the ProductsContext.Provider
        // the products empty array is the key while the productsList below is the value -> KVP 
    const [productsList, setProductsList] = useState([
        {
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
          }
    ]);

    const toggleFavHandler = (productId) => {
        // const specificItem = productsList.filter(productId);
        // specificItem.isFavorite = !specificItem.isFavorite;
            // add logic of adding new favorite list seen in reducers> products.js
                // currentProdList stores the data within productsList, no need to use external state of productsList
                // 1. Find Index of product that is favorited/unfavorited
            setProductsList(currentProdList => {
                const prodIndex = currentProdList.findIndex(
                p => p.id === productId
              );
              console.log(prodIndex);
              // 2. Change favorite status in toggle way by(!)
              const newFavStatus = !currentProdList[prodIndex].isFavorite;
              // 3. create new updateProducts array with information from productsList
              const updatedProducts = [...currentProdList];
              // 4. Change the product which has a change/toggled favorited, use(...) operator
                // just change isFavorite to newFavStatus which is the toggle
              updatedProducts[prodIndex] = {
                ...currentProdList[prodIndex],
                isFavorite: newFavStatus
              };
              // make sure to return this so that no error results and you actually show new list, willl result in failure if no return
            return updatedProducts;
            })
    }
    return(
        <ProductsContext.Provider 
        value ={{
            products: productsList, 
            toggleFav: toggleFavHandler 
        }}>
            {props.children}
        </ProductsContext.Provider>
    );
}