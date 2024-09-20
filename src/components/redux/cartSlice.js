import { createSlice } from "@reduxjs/toolkit";

// this function gets the data from the local storage
const loadCartFromLocalStorage = () => {
    const cartValue = localStorage.getItem('cartValue');
    return cartValue ? JSON.parse(cartValue) : [];
};

// this function set the data in the local storage
const saveCartToLocalStorage = (cartValue) => {
    localStorage.setItem('cartValue', JSON.stringify(cartValue));
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(),
        
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            saveCartToLocalStorage(state.items);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(state.items);
        },
        productIncrement: (state, action) => {
            const item = state.items.find(item => item.id == action.payload);
            if (item) {
                item.quantity += 1
                saveCartToLocalStorage(state.items);
            }
        },
        productDecrement: (state, action) => {
            const item = state.items.find(item => item.id == action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1
                saveCartToLocalStorage(state.items);
            }

        }
    },
});

// Selector to get all cart items
export const selectCartItems = (state) => state.cart.items;

export const { addItem, removeItem, productIncrement, productDecrement } = cartSlice.actions;
export default cartSlice.reducer;