import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import Card from '../card/Card';

function Deserts() {

    const [deserts, setDeserts] = useState([]);


    useEffect(() => {
        getDeserts();
    }, [])

    const getDeserts = async () => {

        const check = localStorage.getItem('deserts');

        if (check) {
            setDeserts(JSON.parse(check))

        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&desserts`);
            const data = await api.json();

            localStorage.setItem('deserts', JSON.stringify(data.recipes));

            setDeserts(data.recipes);
            console.log(data.recipes);

        }

    };
    return (
        <div>
            <Wrapper>
                <h2>Desserts</h2>
                <Splide options={{
                    perPage: 4,
                    gap: 50,
                    arrows: false,
                    breakpoints:
                    {
                        992: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 1,
                        },
                    }
                }}>
                    {deserts.map((recipe) => {

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

@media only screen and (max-width: 768px) {
    margin: 1.5rem 0rem;
}

.splide__track {
    padding-bottom: 40px;
}
`;

export default Deserts;
