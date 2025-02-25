import stockReducer, {
  addDishToTheMenu,
  updateQuantity,
  removeIngredient,
} from "../redux/slices/stockSlice";

interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
}

describe("stockSlice", () => {
  let initialState: { items: MenuItem[] };

  beforeEach(() => {
    initialState = {
      items: [
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
      items: [],
    });
  });

  it("should add an dish to the menu", () => {
    const testMenuItem: MenuItem = {
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
      { ...initialState, items: [...initialState.items] },
      addDishToTheMenu(testMenuItem)
    );

    expect(newState.items).toHaveLength(3);

    const updatedTestMenuItem = newState.items.find(
      (ing) => ing.id === "main-dish-3"
    );
    expect(updatedTestMenuItem?.quantity).toBe(1);
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
      newState.items.find((ing) => ing.id === "side-dish-1")?.quantity
    ).toBe(10);
  });

  it("should remove an ingredient", () => {
    const newState = stockReducer(
      initialState,
      removeIngredient("side-dish-2")
    );
    expect(newState.items).toHaveLength(2);
    expect(newState.items.find((ing) => ing.id === "7")).toBeUndefined();
  });
});
