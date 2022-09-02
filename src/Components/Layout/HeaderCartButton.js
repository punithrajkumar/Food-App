import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useContext, useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";

import classes from "./HeaderCartButton.module.scss";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <span>
        <ShoppingCartSharpIcon />
      </span>
      <div>Your Cart</div>
      <Badge className={classes.badge}>{numberOfCartItems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;
