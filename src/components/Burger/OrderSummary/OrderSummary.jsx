import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] Did update.')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredientKey => (
        <li key={ingredientKey}>
          <IgKey>{ingredientKey}</IgKey>
          :&nbsp;
          {this.props.ingredients[ingredientKey]}
        </li>
      )
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Ingredient(s) in this order:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <strong>
          <p>
            Total Price:&nbsp;$&nbsp;
            {this.props.totalPrice.toFixed(2)}
          </p>
        </strong>
        <Button btnType="Danger" click={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" click={this.props.continue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
};

const IgKey = styled.span`
  text-transform: capitalize;
`;

export default OrderSummary;
