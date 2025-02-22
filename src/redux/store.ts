import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slices/stockSlice";
import salesReducer from "./slices/salesSlice";

export const store = configureStore({
  reducer: {
    stock: stockReducer,
    sales: salesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
