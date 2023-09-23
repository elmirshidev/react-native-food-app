import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, 
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items[action.payload.id] = action.payload; // Set the item using bracket notation
    },
    removeFromBasket: (state, action) => {
      delete state.items[action.payload.id]; // Remove the item using the delete operator
    },
  },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
