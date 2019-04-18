import React from 'react';
import styled from 'styled-components';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = props => (
  <BuildControls>
    <p>
      Current Price:&nbsp;
      <strong>$&nbsp;</strong>
      <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disable={props.disabled[ctrl.type]}
      />
    ))}
    <OrderButton
      disabled={!props.purchaseable}
      onClick={props.viewOrder}
    >
      ORDER NOW
    </OrderButton>
  </BuildControls>
);

const BuildControls = styled.div`
  margin: auto;
  padding: 10px 0;
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
`;

const OrderButton = styled.button`
  padding: 15px 30px;
  border: 1px solid #966909;
  box-shadow: 2px 2px 2px #966909;
  color: #966909;
  background-color: #dad735;
  outline: none;
  font-family: inherit;
  font-size: 1.2em;
  cursor: pointer;
  :hover, :active {
    background-color: #a0dB41;
    border: 1px solid #966909;
    color: #966909;
  }
  :disabled {
    border: 1px solid #ccc;
    color: #888;
    background-color: #c7c6c6;
    cursor: not-allowed;
  }
  :not(:disabled) {
    animation: enable 0.3s linear;
  }
  @keyframes enable {
    0% { transform: scale(1); }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

export default buildControls;
