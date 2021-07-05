import React from 'react';
import Fade from 'react-reveal/Fade';
import style from '../recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <Fade top>
                <h1> {title} </h1>
                <ol>
                    {ingredients.map(ingredient =>(
                        <li> {ingredient.text} </li>
                    ))}
                </ol>
                <p> {calories} </p>
                <img className={style.image} src={image} alt="" />
            </Fade>
        </div>
    );
}

export default Recipe;