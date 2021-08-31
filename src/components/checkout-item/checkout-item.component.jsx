import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, clearCartItem, addCartItem, removeCartItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
