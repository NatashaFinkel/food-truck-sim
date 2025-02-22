import stockReducer, {
  addIngredient,
  updateQuantity,
  removeIngredient,
} from "../redux/slices/stockSlice";

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
}

describe("stockSlice", () => {
  let initialState: { ingredients: Ingredient[] };

  beforeEach(() => {
    initialState = {
      ingredients: [
        { id: "4", name: "Poisson au lait de coco", quantity: 5 },
        { id: "7", name: "Riz nature", quantity: 10 }
      ],
    };
  });

  it("should return the initial state when passed an undefined state", () => {
    expect(stockReducer(undefined, { type: '' })).toEqual({
      ingredients: [],
    });
  });

  it("should add an ingredient", () => {
    const newIngredient: Ingredient = { id: "3", name: "Fromage", quantity: 7 };
    const newState = stockReducer(initialState, addIngredient(newIngredient));

    expect(newState.ingredients).toHaveLength(3);
    expect(newState.ingredients.find((ing) => ing.id === "3")).toEqual(
      newIngredient
    );
  });

  it("should update the quantity of an existing ingredient", () => {
    const newState = stockReducer(
      initialState,
      updateQuantity({ id: "7", quantity: 15 })
    );

    expect(newState.ingredients.find((ing) => ing.id === "7")?.quantity).toBe(
      15
    );
  });

  it("should remove an ingredient", () => {
    const newState = stockReducer(initialState, removeIngredient("7"));

    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients.find((ing) => ing.id === "7")).toBeUndefined();
  });
});
