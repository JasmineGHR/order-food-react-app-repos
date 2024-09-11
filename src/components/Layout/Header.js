import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeats</h1>
            <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table"/>
            </div>
       
    </Fragment>
}

export default Header ;