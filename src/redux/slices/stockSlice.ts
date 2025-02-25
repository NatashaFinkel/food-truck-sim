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

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        ingredients: string[];
        price: number;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (ing) => ing.id === action.payload.id
      );
      if (item) {
        item.name = action.payload.name;
        item.ingredients = action.payload.ingredients;
        item.price = action.payload.price;
        item.quantity = action.payload.quantity;
        localStorage.setItem("Menu", JSON.stringify(state.items));
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          ingredients: [],
          price: action.payload.price,
          quantity: action.payload.quantity,
        });
        localStorage.setItem("Menu", JSON.stringify(state.items));
      }
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (ing) => ing.id !== action.payload
      );
      localStorage.setItem("Menu", JSON.stringify(state.items));
    },
  },
});

export const { addDishToTheMenu, updateQuantity, removeIngredient } =
  stockSlice.actions;
export default stockSlice.reducer;
