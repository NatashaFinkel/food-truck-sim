export interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface StockState {
  items: MenuItem[];
}
