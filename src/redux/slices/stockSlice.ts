import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
}

interface StockState {
  items: MenuItem[];
}

const initialState: StockState = {
  items: JSON.parse(localStorage.getItem("Menu") || "[]"),
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addDishToTheMenu: (state, action: PayloadAction<MenuItem>) => {
      const alreadyStoragedItem = state.items.find(
        (ing) => ing.id === action.payload.id
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
        (ing) => ing.id === action.payload.id
      );
      if (alreadyStoragedItem) {
        alreadyStoragedItem.quantity += action.payload.quantity - 1;
        localStorage.setItem("Menu", JSON.stringify(state.items));
      }
    },
  },
});

export const { addDishToTheMenu, removeDishFromTheMenu } =
  stockSlice.actions;
export default stockSlice.reducer;
