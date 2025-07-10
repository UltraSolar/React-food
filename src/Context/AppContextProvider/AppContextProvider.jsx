import React, { useState } from "react";
import CartContext from "../CartContext/CartContext";

const AppContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>

    );
};

export default AppContextProvider;
