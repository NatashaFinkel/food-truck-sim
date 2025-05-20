import stockReducer, {
  addDishToTheMenu,
  removeDishFromTheMenu,
} from "../redux/slices/stockSlice";

interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
  initialSpeedIndex: number;
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
          initialSpeedIndex: 6,
        },
        {
          id: "side-dish-1",
          name: "Riz nature",
          ingredients: ["riz", "sel"],
          price: 3,
          quantity: 10,
          initialSpeedIndex: 5,
        },
      ],
    };
  });

  it("should return the initial state when passed an undefined state", () => {
    expect(stockReducer(undefined, { type: "" })).toEqual({
      items: [],
    });
  });

  it("should add a dish to the menu", () => {
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
      initialSpeedIndex: 6,
    };
    const newState = stockReducer(
      { ...initialState, items: [...initialState.items] },
      addDishToTheMenu(testMenuItem),
    );
    expect(newState.items).toHaveLength(3);
    const updatedTestMenuItem = newState.items.find(
      (ing) => ing.id === "main-dish-3",
    );
    expect(updatedTestMenuItem?.quantity).toBe(1);
  });

  it("should remove a dish from the menu", () => {
    const dishToRemove = initialState.items.find(
      (ing) => ing.id === "side-dish-1",
    );
    if (dishToRemove) {
      const newState = stockReducer(
        { ...initialState, items: [...initialState.items] },
        removeDishFromTheMenu(dishToRemove),
      );
      expect(
        newState.items.find((item) => item.id === "side-dish-1")?.quantity,
      ).toBe(9);
    }
  });
});
