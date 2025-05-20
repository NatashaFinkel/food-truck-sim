import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sales {
  id: string;
  item: string;
  price: number;
  quantity: number;
  date: string;
}

interface SoldDishList {
  soldDish: Sales[];
}

interface SalesState {
  sales: Sales[];
  soldDishes: SoldDishList[];
}

const initialState: SalesState = {
  sales: [],
  soldDishes: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action: PayloadAction<Sales>) => {
      state.sales.push(action.payload);
    },

    AddDishToSoldOutList: (state, action: PayloadAction<string>) => {
      const dishIndex = state.sales.findIndex(
        (sale) => sale.id === action.payload,
      );
      if (dishIndex !== -1) {
        const [dish] = state.sales.splice(dishIndex, 1);
        state.soldDishes.push({ soldDish: [dish] });
      }
    },
  },
});

export const { addSale, AddDishToSoldOutList } = salesSlice.actions;
export default salesSlice.reducer;
