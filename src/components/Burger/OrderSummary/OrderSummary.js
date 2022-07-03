import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary  extends Component {
    UNSAFE_componentWillUpdate() {
        console.log('[OrderSummary] Will update');
    }
        render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })
        return(
                <Aux>
                    <h3>Your Order</h3>
                    <p>A delecious burger with following ingredients: </p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p>Continue to checkout</p>
                    <p><strong>Price:</strong> ${this.props.totalPrice.toFixed(2)}</p>
                    <Button btnType="danger" clicked={this.props.purchaseCancled}>CANCEL</Button>
                    <Button btnType="success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
                </Aux>
        )
    }
}

export default OrderSummary;
