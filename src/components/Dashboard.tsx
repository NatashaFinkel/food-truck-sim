import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addDishToTheMenu } from "../redux/slices/stockSlice";
import mainDishes from "../food-data/main-dishes.json";
import sideDishes from "../food-data/side-dishes.json";

const Dashboard = () => {
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
      console.log(menu);
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
        }
      );
    }
  }

  useEffect(() => {
    showMenuItems();
  }, [menuItems]);

  return (
    <div className="dashboard">
      <h2>Y'a quoi à la carte, aujourd'hui ?</h2>
      <p>
        Choisissez jusqu'à 3 plats différents, ainsi que 2 accompagnements
        maximum.
      </p>
      <div id="menu-container" className="menu-container"></div>
      <div className="ingredients-list">
        {combinedDishes.map((dish) => (
          <div key={dish.id} className="ingredients-list-item">
            <li>{dish.name}</li>
            <span id={"ingrédient-" + dish.id + "-quantity"}></span>
            <button
              key={dish.id + "-add-btn"}
              id={"ingrédient-" + dish.id + "-add-btn"}
              onClick={() => handleAddDishToTheMenu(dish)}
            >
              ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
