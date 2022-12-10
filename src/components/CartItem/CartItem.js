import "./CartItem.css";

function CartItem(props) {
  return (
    <div className="cartItem">
      <img src={props.item.image}></img>
      <p>{props.item.title}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

export default CartItem;
