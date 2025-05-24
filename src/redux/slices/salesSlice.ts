import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../TypeScript/interfaces/MenuItem";

import { SalesState } from "../../TypeScript/interfaces/SalesState";

const initialState: SalesState = {
  menuItem: [],
  soldDishes: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action: PayloadAction<MenuItem>) => {
      state.menuItem.push(action.payload);
    },

    AddDishToSoldOutList: (state, action: PayloadAction<string>) => {
      const dishIndex = state.menuItem.findIndex(
        (sale) => sale.id === action.payload,
      );
      if (dishIndex !== -1) {
        const [dish] = state.menuItem.splice(dishIndex, 1);
        state.soldDishes.push({ soldDish: [dish] });
      }
    },
  },
});

export const { addSale, AddDishToSoldOutList } = salesSlice.actions;
export default salesSlice.reducer;
