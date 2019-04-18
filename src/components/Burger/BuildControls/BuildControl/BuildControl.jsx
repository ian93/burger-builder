import React from 'react';
import styled from 'styled-components';

const buildControl = props => (
  <BuildControl>
    <Label>{props.label}</Label>
    <button type="button" className="Less" onClick={props.removed} disabled={props.disable}>Less</button>
    <button type="button" className="More" onClick={props.added}>More</button>
  </BuildControl>
);

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  button {
    margin: 0 5px;
    padding: 5px;
    width: 80px;
    display: block;
    border: 1px solid #aa6817;
    outline: none;
    font: inherit;
    cursor: pointer;
    :disabled {
      border: 1px solid #7e7365;
      color: #ccc;
      background-color: #ac9980;
      cursor: default;
    }
    :hover:disabled {
      background-color: #ac9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  .Less {
    background-color: #d39952;
    color: white;
    :hover, :active {
      background-color: #daa972;
      color: white;
    }
  }
  .More {
    background-color: #8f5e1e;
    color: white;
    :hover, :active {
      background-color: #99703f;
      color: white;
    }
  }
`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export default buildControl;