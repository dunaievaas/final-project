import React from 'react';
import Meal from './Meal';

function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <>
            <div className='nutrients'>
                <h2>Macrons</h2>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </div>

            <div className='meals'>
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                })}

            </div>
        </>
    )
}

export default MealList
