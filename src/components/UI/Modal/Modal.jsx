import React from 'react';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const areEqual = (prevProps, nextProps) => {
  return nextProps.show === prevProps.show;
}
const modal = props => (
  <Aux>
    <Backdrop show={props.show} click={props.modalClosed} />
    <Modal show={props.show}>
      {props.children}
    </Modal>
  </Aux>
);

const Modal = styled.div`
  padding: 16px;
  position: fixed;
  left: 15%;
  top: 30%;
  width: 70%;
  z-index: 500;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #000;
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${props => props.show ? 1 : 0};
`;

export default React.memo(modal, areEqual);