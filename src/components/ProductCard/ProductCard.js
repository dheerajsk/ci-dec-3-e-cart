
import "./ProductCard.css";

function ProductCard() {
  return (
    <div>
      <div className="card card-main">
      <h5 className="card-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
      <hr></hr>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
         
          <h6>109.95</h6>
          <p className="card-text">
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <a href="#" className="btn btn-success">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
