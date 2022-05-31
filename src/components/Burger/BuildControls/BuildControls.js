import React from "react";
import './BuildControls.scss';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className="build-controls">
        <div className="totalPrice">Total Price = <strong>{props.price.toFixed(2)}</strong></div>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added= {() => props.ingredientAdded(ctrl.type)}
            deleted={()=> props.ingredientDeleted(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className="order-button">Order Now</button>
    </div>
);

export default buildControls;