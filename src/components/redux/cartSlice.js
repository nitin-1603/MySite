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
        value: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            saveCartToLocalStorage(state.items);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(state.items);
        },
        productIncrement: (state) => {
            state.value += 1
        },
        productDecrement: (state) => {
            if (state.value <= 0) {
                state.value == 0;
            } else {
                state.value -= 1;
            }
        },
        // Other cart actions can be added here
    },
});

// Selector to get all cart items
export const selectCartItems = (state) => state.cart.items;

export const { addItem, removeItem, productIncrement, productDecrement } = cartSlice.actions;
export default cartSlice.reducer;