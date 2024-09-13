import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <p className={classes.desc}>{props.description}</p>
      <p className={classes.price}>{price}</p>
    </div>
    <div className={classes['meal-quantity']}>
      <div className={classes['amount-sec']}>
        <div>Amount</div>
        <div className={classes.quantity}>1</div>
      </div>
      <div>
        <button className={classes['add-button']}>+ Add</button>
      </div>
    </div>
    </div>
   

  );
};

export default MealItem;