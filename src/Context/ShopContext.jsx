import React,{ createContext }  from "react";

import allproducts from  '../Components/Assets/allproducts'
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue= {allproducts}
    console.log(allproducts)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
