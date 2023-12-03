import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import Card from '../card/Card';

function Veggie() {

    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check))

        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));

            setVeggie(data.recipes);
            console.log(data.recipes);

        }

    };
    return (
        <div>
            <Wrapper>
                <h2>Veggie Picks</h2>
                <Splide options={{
                    perPage: 3,
                    gap: 50,
                    arrows: false,
                }}>
                    {veggie.map((recipe) => {

                        return (
                            <SplideSlide key={recipe.id} >
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
        </div>
    )
}

const Wrapper = styled.div`
margin: 4rem 0rem;

.splide__track {
    padding-bottom: 40px;
}
`;

export default Veggie
