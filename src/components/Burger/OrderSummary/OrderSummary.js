import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            <p><strong>Price:</strong> ${props.totalPrice.toFixed(2)}</p>
            <Button btnType="danger" clicked={props.purchaseCancled}>CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary
