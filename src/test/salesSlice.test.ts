import salesReducer, { addSale, clearSales } from "../redux/slices/salesSlice";

interface Sales {
  id: string;
  item: string;
  price: number;
  quantity: number;
  date: string;
}

describe("salesSlice", () => {
  let initialState: { sales: Sales[]; totalRevenue: number };

  beforeEach(() => {
    initialState = {
      sales: [
        {
          id: "1",
          item: "Ravitoto",
          price: 12,
          quantity: 2,
          date: "2025-01-28",
        },
        {
          id: "9",
          item: "Bananes plantains",
          price: 5,
          quantity: 7,
          date: "2025-01-28",
        },
      ],
      totalRevenue: 59,
    };
  });

  it("should return the initial state when passed an undefined state", () => {
    expect(salesReducer(undefined, { type: "" })).toEqual({
      sales: [],
      totalRevenue: 0,
    });
  });

  it("should add a sale and update total revenue", () => {
    const newSale: Sales = {
      id: "2",
      item: "Romazava",
      price: 10,
      quantity: 2,
      date: "2025-02-24",
    };
    const newState = salesReducer(initialState, addSale(newSale));

    expect(newState.sales).toHaveLength(3);
    expect(newState.sales.find((sale) => sale.id === "2")).toEqual(newSale);
    expect(newState.totalRevenue).toBe(79);
  });

  it("should clear all sales and reset total revenue", () => {
    const newState = salesReducer(initialState, clearSales());

    expect(newState.sales).toHaveLength(0);
    expect(newState.totalRevenue).toBe(0);
  });
});
