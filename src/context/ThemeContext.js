import { createContext, useContext, useReducer } from "react";
import { themeRuducer } from "../reducer/themeReducer";

const initialState = {
    total: 0,
    cartList: []
}

const CartContext = createContext(initialState);

const [state, dispatch] = useReducer(themeRuducer, initialState);

    dispatch({
        type: "ADD_TO_CART",
        payload: {
            
        }
    })

export const CartProvider = ({ children }) => {
    const value = {
        total: 0,
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context
}