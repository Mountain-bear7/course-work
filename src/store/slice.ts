import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddToCartPayload, IInitialState} from "./types";
import {cart} from "../data/cart.data";

const initialState: IInitialState = {
    items: cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IAddToCartPayload>) => {
            const id = state.items.length
            state.items.push({...action.payload, id})
        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
        },
        changeQuantity: (state, action:PayloadAction<{id: number}>) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if (item) item.quantity++
        },
    }
})