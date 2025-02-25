import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ingredient {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
}

interface StockState {
  ingredients: Ingredient[];
}

const initialState: StockState = {
  ingredients: JSON.parse(localStorage.getItem("ingredients") || "[]"),
};



const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<Ingredient>) => {
      const existingIngredient = state.ingredients.find(
        (ing) => ing.id === action.payload.id
      );
      if (existingIngredient) {
        existingIngredient.quantity += action.payload.quantity + 1;
      } else {
        state.ingredients.push({
          ...action.payload,
          quantity: action.payload.quantity + 1,
        });
      }
      localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
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
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload.id
      );
      if (ingredient) {
        ingredient.name = action.payload.name;
        ingredient.ingredients = action.payload.ingredients;
        ingredient.price = action.payload.price;
        ingredient.quantity = action.payload.quantity;
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      } else {
        state.ingredients.push({
          id: action.payload.id,
          name: action.payload.name,
          ingredients: [],
          price: action.payload.price,
          quantity: action.payload.quantity,
        });
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      }
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (ing) => ing.id !== action.payload
      );
      localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
    },
  },
});

export const { addIngredient, updateQuantity, removeIngredient } =
  stockSlice.actions;
export default stockSlice.reducer;
