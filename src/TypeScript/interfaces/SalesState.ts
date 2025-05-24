import { MenuItem } from "./MenuItem";
import { SoldDishList } from "./SoldDishList";

export interface SalesState {
  menuItem: MenuItem[];
  soldDishes: SoldDishList[];
}
