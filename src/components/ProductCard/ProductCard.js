
import "./ProductCard.css";

// props is an object which encapsulates all the attributes passed to component.
function ProductCard(props) {

  let product=props.item;

  return (
    <div>
      <div className="card card-main">
      <h5 className="card-title">{product.title}</h5>
      <hr></hr>
        <img src={product.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h6>{product.price}</h6>
          <p className="card-text">
          {product.description}
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
