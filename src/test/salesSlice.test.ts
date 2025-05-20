import salesReducer, {
  addSale,
  AddDishToSoldOutList,
} from "../redux/slices/salesSlice";

describe("salesSlice", () => {
  const initialState = {
    sales: [],
    soldDishes: [],
  };

  it("should add a sale to sales list", () => {
    const newSale = {
      id: "main-dish-1",
      item: "Ravitoto",
      price: 12,
      quantity: 2,
      date: "2025-01-28",
    };
    const state = salesReducer(initialState, addSale(newSale));

    expect(state.sales).toHaveLength(1);
    expect(state.sales[0]).toEqual(newSale);
  });

  it("should remove a dish from sales list and transfer it to sold out list", () => {
    const initialStateWithSales = {
      sales: [
        {
          id: "main-dish-1",
          item: "Ravitoto",
          price: 12,
          quantity: 2,
          date: "2025-01-28",
        },
        {
          id: "main-dish-6",
          item: "Poisson braisé",
          price: 10,
          quantity: 7,
          date: "2025-01-28",
        },
      ],
      soldDishes: [],
    };

    const newState = salesReducer(
      initialStateWithSales,
      AddDishToSoldOutList("main-dish-1"),
    );
    expect(newState.sales).toHaveLength(1);
    expect(
      newState.sales.find((sale) => sale.id === "main-dish-1"),
    ).toBeUndefined();
    expect(newState.soldDishes).toHaveLength(1);
    expect(newState.soldDishes[0].soldDish[0].id).toBe("main-dish-1");
  });
});
