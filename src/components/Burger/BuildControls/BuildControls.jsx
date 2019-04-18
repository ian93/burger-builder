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

export default buildControls;
