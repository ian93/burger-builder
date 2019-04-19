import React from 'react';
import styled from 'styled-components';

const button = props => (
  <Button
    type={props.btnType}
    onClick={props.click}
  >
    {props.children}
  </Button>
);

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  color: ${({type}) => 
    type === 'Danger' && '#f33' ||
    type === 'Success' && '#0a0' ||
    '#000'
  };
  background-color: transparent;
  outline: none;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

export default button;