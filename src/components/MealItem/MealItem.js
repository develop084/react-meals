import React from "react";
import './MealItem.css'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`
  return (
    <li className='wrapper-item'>
      <div >
        <h3 className="name-dish">{props.name}</h3>
        <div>{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
       <MealItemForm /> 
      </div>
    </li>
  );
};

export default MealItem;
