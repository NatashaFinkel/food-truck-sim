import { JSX } from "react/jsx-runtime";
import DishList from "../TypeScript/interfaces/DishList";
function StockItem() {
  const menu: DishList[] = JSON.parse(localStorage.getItem("Menu") || "[]");
  console.log(menu);

  const dishElements: JSX.Element[] = [];
  menu.forEach((dish) => {
    dishElements.push(
      <div key={dish.id} className="stock-item">
        <span>
          <i className="fa-solid fa-truck"></i>
        </span>
        <p>{dish.name}</p>
        <p>Stock restant : {dish.quantity}</p>
      </div>
    );
  });

  return dishElements;
}

export default StockItem;
