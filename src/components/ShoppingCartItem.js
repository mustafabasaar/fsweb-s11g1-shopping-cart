import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const Item = (props) => {
  const { removeItem } = useContext(ProductContext);
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.item)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
