import { useContext } from "react";

import "./MealItem.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      mname: props.mname,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3 className="mname">{props.mname}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
