import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
}

interface StockState {
  ingredients: Ingredient[];
}

const initialState: StockState = {
  ingredients: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<Ingredient>) => {
      state.ingredients.push(action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload.id
      );
      if (ingredient) {
        ingredient.quantity = action.payload.quantity;
      }
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (ing) => ing.id !== action.payload
      );
    },
  },
});

export const { addIngredient, updateQuantity, removeIngredient } =
  stockSlice.actions;
export default stockSlice.reducer;
