import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addDishToTheMenu, removeDishFromTheMenu } from "../redux/slices/stockSlice";
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
    <div className="dashboard">
      <h2>Y'a quoi à la carte, aujourd'hui ?</h2>
      <div className="dashboard-txt-container">
        <p>
          Sélectionnez les plats de votre menu en prenant en compte la feuille
          de mission.
        </p>
        <p> Attention à ne pas dépasser le budget !</p>
      </div>
      <div id="menu-container" className="menu-container"></div>
      <div className="ingredients-list">
        {combinedDishes.map((dish) => (
          <div key={dish.id} className="ingredients-list-item">
            <li>{dish.name}</li>
            <div className="btn-container">
              {" "}
              <button
                key={dish.id + "-add-btn"}
                id={"ingrédient-" + dish.id + "-add-btn"}
                className="btn"
                onClick={() => handleAddDishToTheMenu(dish)}
              >
                +
              </button>
              <button
                key={dish.id + "-remove-btn"}
                id={"ingrédient-" + dish.id + "-remove-btn"}
                className="btn"
                onClick={() => handleRemoveDishFromTheMenu(dish)}
              >
                &#45;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
