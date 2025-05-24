import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  addDishToTheMenu,
  removeDishFromTheMenu,
} from "../redux/slices/stockSlice";
import mainDishes from "../food-data/main-dishes.json";
import sideDishes from "../food-data/side-dishes.json";
import AppButton from "./AppButton";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const combinedDishes = [...mainDishes, ...sideDishes];
  const menuItems = useSelector((state: RootState) => state.stock.items);

  const handleAddDishToTheMenu = (dish: {
    id: string;
    name: string;
    ingredients: string[];
    price: number;
    quantity: number;
  }) => {
    const newDish = {
      id: dish.id,
      name: dish.name,
      ingredients: dish.ingredients,
      price: dish.price,
      quantity: dish.quantity,
    };
    dispatch(addDishToTheMenu(newDish));
  };

  function showMenuItems() {
    const menuContainer = document.getElementById("menu-container");
    const menu = JSON.parse(localStorage.getItem("Menu") || "[]");
    if (menuContainer) {
      menuContainer.innerHTML = "";
      menu.forEach(
        (dish: {
          id: string;
          name: string;
          ingredients: string[];
          price: number;
          quantity: number;
        }) => {
          const dishElement = document.createElement("div");
          dishElement.classList.add("menu-item");
          dishElement.innerHTML = `<div>${dish.name} : ${dish.quantity}</div>`;
          menuContainer.appendChild(dishElement);
        },
      );
    }
  }

  const handleRemoveDishFromTheMenu = (dish: {
    id: string;
    name: string;
    ingredients: string[];
    price: number;
    quantity: number;
  }) => {
    const newDish = {
      id: dish.id,
      name: dish.name,
      ingredients: dish.ingredients,
      price: dish.price,
      quantity: dish.quantity,
    };
    dispatch(removeDishFromTheMenu(newDish));
  };

  useEffect(() => {
    showMenuItems();
  }, [menuItems]);

  return (
    <div className="main-container">
      <h2>Y'a quoi à la carte, aujourd'hui ?</h2>
      <div className="dashboard-txt-container">
        <p>
          Sélectionne les plats de ton menu en prenant en compte la feuille de
          mission.
        </p>
        <p>Attention à ne pas dépasser ton budget !</p>
      </div>
      <div id="menu-container" className="menu-container"></div>
      <div className="ingredients-list">
        {combinedDishes.map((dish) => (
          <div key={dish.id} className="ingredients-list-item">
            <li>{dish.name}</li>
            <div className="btn-container">
               <span>{dish.price} €</span>
              {" "}
              <AppButton
                id={"ingrédient-" + dish.id + "-add-btn"}
                className="btn add-btn"
                onClick={() => handleAddDishToTheMenu(dish)}
              >
                +
              </AppButton>
              <AppButton
                id={"ingrédient-" + dish.id + "-remove-btn"}
                className="btn remove-btn"
                onClick={() => handleRemoveDishFromTheMenu(dish)}
              >
                &#45;
              </AppButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
