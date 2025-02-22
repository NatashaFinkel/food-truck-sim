import ingredients from "../food-data/ingredients.json";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Stock du Food Truck</h2>
      <div className="ingredients-list">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="ingredients-list-item">
            <li>{ingredient.name}</li>
            <button
              key={ingredient.id + "-add-btn"}
              id={"ingrédient-" + ingredient.id + "-add-btn"}
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
