import React from 'react';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingredientKey => (
      <li key={ingredientKey}>
        <IgKey>{ingredientKey}</IgKey>
        :&nbsp;
        {props.ingredients[ingredientKey]}
      </li>
    )
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredient(s) in this order:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

const IgKey = styled.span`
  text-transform: capitalize;
`;

export default orderSummary;
