import React from 'react';
import styled from 'styled-components';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {
  const transfromedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, idx) => {
        return (
          <BurgerIngredients key={ingredientKey + idx} type={ingredientKey} />
        );
      });
    }
  );

  return (
    <Burger>
      <BurgerIngredients type="bread-top" />
      {transfromedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </Burger>
  );
};

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

export default burger;