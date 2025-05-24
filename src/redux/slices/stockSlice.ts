import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem, StockState } from "../../TypeScript/interfaces/MenuItem";

const initialState: StockState = {
  items: JSON.parse(localStorage.getItem("Menu") || "[]"),
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addDishToTheMenu: (state, action: PayloadAction<MenuItem>) => {
      const alreadyStoragedItem = state.items.find(
        (stockItem) => stockItem.id === action.payload.id
      );
      if (alreadyStoragedItem) {
        alreadyStoragedItem.quantity += action.payload.quantity + 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity + 1,
        });
      }
      localStorage.setItem("Menu", JSON.stringify(state.items));
    },

    removeDishFromTheMenu: (state, action: PayloadAction<MenuItem>) => {
      const alreadyStoragedItem = state.items.find(
        (stockItem) => stockItem.id === action.payload.id
      );
      if (alreadyStoragedItem) {
        alreadyStoragedItem.quantity -= 1;
        if (alreadyStoragedItem.quantity <= 0) {
          state.items = state.items.filter(
            (ing) => ing.id !== action.payload.id
          );
        }
        localStorage.setItem("Menu", JSON.stringify(state.items));
      }
    },
  },
});

export const { addDishToTheMenu, removeDishFromTheMenu } = stockSlice.actions;
export default stockSlice.reducer;
