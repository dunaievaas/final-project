import React from 'react';
import Veggie from "../components/veggie/Veggie";
import Popular from "../components/popular/Popular";
import Deserts from '../components/deserts/Deserts';
import HeroSlider from '../components/hero-slider/HeroSlider';
import Catecory from '../components/category/Catecory';
import MealPlan from '../components/meal-plan/MealPlan';

function Home() {
    return (
        <>
            <HeroSlider />
            <section className='picks'>
                <div className='container'>
                    <Catecory />
                    <Popular />
                    <Veggie />
                    <Deserts />
                    <MealPlan />
                </div>

            </section>
        </>
    )
}

export default Home
