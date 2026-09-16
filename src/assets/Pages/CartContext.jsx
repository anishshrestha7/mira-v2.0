import React, { useEffect, useReducer, createContext } from 'react'

const CART_STORAGE_KEY = 'mira-cart';

const getInitialCartState = () => {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        const cart = savedCart ? JSON.parse(savedCart) : [];

        return { cart: Array.isArray(cart) ? cart : [] };
    } catch {
        return { cart: [] };
    }
};

let cartReducer = (state, action) => {
    switch (action.type) {
        case 'addtocart': {
            const itemAlreadyInCart = state.cart.some((item) => item.id === action.payload.id);

            if (itemAlreadyInCart) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
                            : item
                    ),
                };
            }

            return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }

        case 'increment':
            return {
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: (item.quantity ?? 1) + 1 }
                        : item
                ),
            };

        case 'decrement': {
            const item = state.cart.find((cartItem) => cartItem.id === action.payload);
            const currentQuantity = item?.quantity ?? 1;

            if (currentQuantity <= 1) {
                return { cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) };
            }

            return {
                cart: state.cart.map((cartItem) =>
                    cartItem.id === action.payload
                        ? { ...cartItem, quantity: (cartItem.quantity ?? 1) - 1 }
                        : cartItem
                ),
            };
        }
        
        case 'remove': 
            return { cart: state.cart.filter(a => a.id !== action.payload) };
            
        default: 
            return state;
    }
}

let CartContext = createContext();
let CartProvider = ({ children }) => {
    let [state, dispatch] = useReducer(cartReducer, undefined, getInitialCartState);

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    }, [state.cart]);
    
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
