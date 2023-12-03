import React from 'react';
import Veggie from "../components/veggie/Veggie";
import Popular from "../components/popular/Popular";
function Home() {
    return (
        <>
            <section className='picks'>
                <div className='container'>
                    <Popular />
                    <Veggie />
                </div>

            </section>
        </>

    )
}

export default Home
