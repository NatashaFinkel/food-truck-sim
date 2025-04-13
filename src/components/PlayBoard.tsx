import Order from "./Order";
import StockItem from "./stockItem";

function PlayBoard() {
  return (
    <div className="main-container">
      <div className="playboard-container">
        <div className="container order-container">
          <h2>Les commandes</h2>
          <Order />
          <Order />
          <Order />
        </div>
        <div className="container stock-container">
          <h2>En stock</h2>
          <StockItem />
          <StockItem />
          <StockItem />
        </div>
      </div>
    </div>
  );
}
export default PlayBoard;
