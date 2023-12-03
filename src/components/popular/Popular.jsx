import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import Card from '../card/Card';

function Popular() {

    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check))

        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));

            setPopular(data.recipes);
            console.log(data.recipes);

        }

    };

    return (
        <div>
            <Wrapper>
                <h2>Popular Picks</h2>
                <Splide options={{
                    perPage: 4,
                    gap: 30,
                    arrows: false,
                }}>
                    {popular.map((recipe) => {

                        return (
                            <SplideSlide key={recipe.id}>
                                <Card item={recipe}>
                                    <Link to={'/recipe/' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                    </Link>
                                </Card>

                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div >
    )
};

const Wrapper = styled.div`
margin: 4rem 0rem;

p {
    font-size: 15px;
}

.splide__track {
    padding-bottom: 40px;
}
`;

export default Popular;
