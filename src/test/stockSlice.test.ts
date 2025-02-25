import stockReducer, {
  addIngredient,
  updateQuantity,
  removeIngredient,
} from "../redux/slices/stockSlice";

interface Ingredient {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
}

describe("stockSlice", () => {
  let initialState: { ingredients: Ingredient[] };

  beforeEach(() => {
    initialState = {
      ingredients: [
        {
          id: "main-dish-4",
          name: "Poisson au lait de coco",
          ingredients: [
            "poisson",
            "lait de coco",
            "tomate",
            "oignon",
            "ail",
            "gingembre",
            "piment",
            "sel",
            "poivre",
          ],
          price: 12,
          quantity: 5,
        },
        {
          id: "side-dish-1",
          name: "Riz nature",
          ingredients: ["riz", "sel"],
          price: 3,
          quantity: 10,
        },
      ],
    };
  });

  it("should return the initial state when passed an undefined state", () => {
    expect(stockReducer(undefined, { type: "" })).toEqual({
      ingredients: [],
    });
  });

  it("should add an ingredient", () => {
    const testIngredient: Ingredient = {
      id: "main-dish-3",
      name: "Poulet au gingembre",
      ingredients: [
        "poulet",
        "gingembre",
        "oignon",
        "ail",
        "tomate",
        "piment",
        "sel",
        "poivre",
      ],
      price: 10,
      quantity: 0,
    };
    const newState = stockReducer(
      { ...initialState, ingredients: [...initialState.ingredients] },
      addIngredient(testIngredient)
    );

    expect(newState.ingredients).toHaveLength(3);

    const updatedTestIngredient = newState.ingredients.find(
      (ing) => ing.id === "main-dish-3"
    );
    expect(updatedTestIngredient?.quantity).toBe(1);
  });

  it("should update the quantity of an existing ingredient", () => {
    const newState = stockReducer(
      initialState,
      updateQuantity({
        id: "side-dish-1",
        name: "Riz nature",
        ingredients: ["riz", "sel"],
        price: 3,
        quantity: 10,
      })
    );

    expect(
      newState.ingredients.find((ing) => ing.id === "side-dish-1")?.quantity
    ).toBe(10);
  });

  it("should remove an ingredient", () => {
    const newState = stockReducer(
      initialState,
      removeIngredient("side-dish-2")
    );
    expect(newState.ingredients).toHaveLength(2);
    expect(newState.ingredients.find((ing) => ing.id === "7")).toBeUndefined();
  });
});
