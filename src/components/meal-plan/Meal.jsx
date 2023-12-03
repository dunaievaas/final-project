import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Meal({ meal }) {

    const [imgeUrl, setImgUrl] = useState("");

    useEffect(() => {
        fetch(` https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                setImgUrl(data.image);
            })
            .catch(() => {
                console.log("error");
            })

    })

    return (
        <div className='meal-card'>
            <h3>{meal.title}</h3>
            <img src={imgeUrl} alt={meal.title} />
            <ul className='meal-card__instruction'>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <Link className='meal-card__button btn' to={'/recipe/' + meal.id}>Go to Recipies</Link>
        </div>
    )
}

export default Meal
