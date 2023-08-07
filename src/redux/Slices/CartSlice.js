import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice( {
    name: "cart",
    initialState: [],
    reducers: {
        add: ( state, action) => {
            state.push(action.payload);
        },
        remove : (state, action) => {
            // is State ke andar sirf wahi wali items ko retain krna jo input parameter me id jo aayi hai uske equal na ho 
            return state.filter( (item) => item.id !== action.payload);
        }
    } 
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

