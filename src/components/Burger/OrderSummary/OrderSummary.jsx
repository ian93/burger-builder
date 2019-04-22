import React from 'react';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const areEqual = (prevProps, nextProps) => {
  return prevProps.ingredients === nextProps.ingredients;
}
const orderSummary = props => {
  // console.log('[orderSummary] Rendered');
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
      <strong>
        <p>
          Total Price:&nbsp;$&nbsp;
          {props.totalPrice.toFixed(2)}
        </p>
      </strong>
      <Button btnType="Danger" click={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

const IgKey = styled.span`
  text-transform: capitalize;
`;

export default React.memo(orderSummary, areEqual);
