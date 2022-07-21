import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [
    {
      id: "m1",
      name: "Shushi",
      description: "Finest fish and veggies",
      price: 220.0,
    },
    {
      id: "m2",
      name: "Chilly Potato",
      description: "Finest Chilles with aromatic Potato",
      price: 70.0,
    },
  ].map((item)=> <li>{item.name}</li>)

  
  return (
    <Modal>
    {cartItems}
      <div>
        <span>Total Amount</span>
        <span>300</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
