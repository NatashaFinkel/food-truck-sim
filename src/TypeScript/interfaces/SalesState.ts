import MenuItem from "./MenuItem";
import SoldDishList from "./SoldDishList";

export default interface SalesState {
  menuItem: MenuItem[];
  soldDishes: SoldDishList[];
}
