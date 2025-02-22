import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sales {
  id: string;
  item: string;
  price: number;
  quantity: number;
  date: string;
}

interface SalesState {
  sales: Sales[];
  totalRevenue: number;
}

const initialState: SalesState = {
  sales: [],
  totalRevenue: 0,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action: PayloadAction<Sales>) => {
      state.sales.push(action.payload);
      state.totalRevenue += action.payload.price * action.payload.quantity;
    },
    clearSales: (state) => {
      state.sales = [];
      state.totalRevenue = 0;
    },
  },
});

export const { addSale, clearSales } = salesSlice.actions;
export default salesSlice.reducer;
