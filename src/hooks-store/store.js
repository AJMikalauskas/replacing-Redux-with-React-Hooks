// Importing React Hooks within the Custom Hook
import React, { useState, useEffect } from "react";

// Just lets that act as part of a store, like redux and context API but custom hook
let globalState = {};
// listeners acts as the array which stores updater functions, like the toggleFavHandler in products-context.js 
let listeners = [];
let actions = {};

// true custom hook below:
    // pass in param here to stop rerender on  store hook/useState call
export const useStore = (shouldListen = true) => {
    // any component that uses this custom hook which has the useState hook will re-render if new state
        // share logic and data by putting globalState in the useState hook
            // not interested in the storage of globalState as it's stored outside the component function anyway
            // Since normally it's array destructured, This is special as the sub 1 is the setting not the storing part of the useState() hook
            // re-renders component when setState is called in other components.
    const setState = useState(globalState)[1];

    // Create replicate of dispatch from redux
        // also pass in payload as it will act as the productId in the products-store.js
    const dispatch = (actionIdentifier,payload) => {
    // actions for this dispatch will be in the actions [] -> should be a function, which is why this () is added
        // return newState from this function created with param of globalState. the action is a function the returns a newState just as redux does
    const newState = actions[actionIdentifier](globalState,payload);
    // globalState now has to be changed to all of it was previously with all of what the newState is
        globalState = {...globalState, ...newState};
        //notify listeners of changes to globalState -> pass new globalState into each listener Fn
        for(const listener of listeners) {
            listener(globalState);
        }
};

    // Ran when component that uses this hook updates, only run when the component mounts
    useEffect(() => {
        if(shouldListen) {
        listeners.push(setState);
        }
    // Cleanup Function to remove listener when the component unmounts
    return () => {
        // use setState because it will be specific to the component using it 
        if(shouldListen) {
        listeners = listeners.filter(li => li !== setState)
        }
    }
    // Would be empty dependency array, but setState is necessary, yet it's value never changes as it's a const
    }, [setState, shouldListen]);

    // return state and function like reducer function from redux
    return [globalState, dispatch]
};

// will receive actions defined by dev and initialState
// need way to add dispatch actions, do by initialStore Fn below: 
    // Create concrete products store from this
export const initStore = (userActions, initialState) => {
    // if initialState isn't null
    // merging initialState into globalState and userActions into actions 
        // make sure to use spread operator for both initialState and userActions
    if(initialState) {
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...userActions};
}