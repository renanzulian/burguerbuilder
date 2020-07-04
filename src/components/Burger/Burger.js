import React from 'react';

import classes from './Burguer.module.css';
import propTypes from 'prop-types';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredients key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burguer}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredient}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: propTypes.object,
};

export default burger;
