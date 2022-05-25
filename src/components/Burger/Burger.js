import React from 'react';
import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    //Object is default js object it has keys method which extract the keys of given object and turns it into an array.
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            console.log(igKey + i);
           return <BurgerIngredient  key={igKey + i} type={igKey} />
        })
    });
    return (
        <div className='burger'>
            <BurgerIngredient type="bread-top" />
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;