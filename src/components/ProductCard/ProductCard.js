
import "./ProductCard.css";

// props is an object which encapsulates all the attributes passed to component.
function ProductCard(props) {

  let product=props.item;

  function handleAddToCartEvent(){
    // store product to the localStorage.
    let cartItems = localStorage.getItem("cartItems");
    if(!cartItems){
      cartItems=[];
    }else{
      cartItems=JSON.parse(cartItems);
    }
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    props.notify(cartItems.length);
  }

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
          <button
          onClick={handleAddToCartEvent}
          className="btn btn-success"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
