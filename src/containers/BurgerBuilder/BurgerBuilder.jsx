import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import AxiosInst from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  meat: 1.3,
  bacon: 0.7,
  salad: 0.5,
  cheese: 0.4
};

class BurgerBuilder extends Component {
  state = {
    fetchComplete: false,
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    mountError: false
  };

  componentDidMount() {
    AxiosInst.get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data, purchaseable: true });
        Object.keys(response.data).forEach(key => {
          const priceAddition = INGREDIENT_PRICES[key];
          const oldPrice = this.state.totalPrice;
          const newPrice = Math.round((oldPrice + priceAddition) * 100) / 100;
          this.setState({ totalPrice: newPrice });
        });
        this.updatePurchaseState(response.data);
        this.setState({ fetchComplete: true });
      })
      .catch(this.setState({ mountError: true }));
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = Math.round((oldPrice + priceAddition) * 100) / 100;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = Math.round((oldPrice - priceDeduction) * 100) / 100;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
      this.updatePurchaseState(updatedIngredients);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('CONTINUE PURCHASING!');
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Ian',
        address: {
          street: 'TestStreet 1',
          zipCode: '10488',
          country: 'Taiwan'
        },
        email: 'ian_yl_chen@gss.com.tw'
      },
      deliveryMethod: 'fastest'
    };
    AxiosInst.post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(() => {
        // console.log(error);
        this.setState({ loading: false, purchasing: false });
      });
  };

  updatePurchaseState(ingredients) {
    const total = Object.keys(ingredients)
      .map(ingredientKey => ingredients[ingredientKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchaseable: total > 0 });
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    Object.keys(disableInfo).forEach(key => {
      disableInfo[key] = disableInfo[key] <= 0;
    });
    let orderSummary = null;
    let burger = this.state.mountError ? <p>Ingredients can&apos;t be loaded!</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
            viewOrder={this.purchaseHandler}
          />
        </Aux>
      );
      if (this.state.purchaseable && this.state.fetchComplete) {
        orderSummary = (
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        );
      }
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, AxiosInst);
