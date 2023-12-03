import React, { useState } from 'react'
import MealList from './MealList';

function MealPlan() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function getMealData() {
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            })


    }

    return (
        <>
            <section className='meal-plan'>
                <div className='container'>
                    <div className='controls'>
                        <input
                            type="numper"
                            placeholder='Calories (e.g 2000)'
                            onChange={handleChange} />
                        <button className='btn' onClick={getMealData}>
                            Get Daily Meal Plan
                        </button>
                    </div>
                </div>
                {mealData && <MealList mealData={mealData} />}
            </section>

        </>

    )
}

export default MealPlan;
