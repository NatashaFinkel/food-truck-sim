export interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  quantity: number;
}

export interface StockState {
  items: MenuItem[];
}
