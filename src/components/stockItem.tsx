import { JSX } from "react/jsx-runtime";

function StockItem() {
  interface DishList {
    id: string;
    name: string;
    quantity: number;
  }

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
