function StockItem() {
  return (
    <div className="stock-item">
      <span>
        <i className="fa-solid fa-truck"></i>
      </span>
      <h4>Nom du plat</h4>
      <span>stock restant (barre de progression)</span>
      <span>Indice de popularité (barre d'intensité)</span>
    </div>
  );
}

export default StockItem;
