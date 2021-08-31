import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { clearCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, clearCartItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
