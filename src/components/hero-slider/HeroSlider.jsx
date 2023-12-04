import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const sliderImg = [
    {
        image: 'https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2-1200x675.png',
        text: "Discover a world of flavors with our diverse range of cuisines",

    },
    {
        image: 'https://diettogo.com/data/fe/image/Calorie-counter.jpg',
        text: "Savor the essence of authentic dishes prepared by top chefs",

    },
    {
        image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg',
        text: "Explore culinary delights that cater to every palate and craving",

    },
    {
        image: 'https://essentialmealdelivery.com/wp-content/uploads/2020/12/fun-facts-about-healthy-eating.jpeg',
        text: 'Indulge in a gastronomic journey with our curated selection of mouthwatering recipes',

    }
]

function HeroSlider() {

    return (
        <section className='hero-block'>
            <Splide options={{
                type: 'loop',
                perPage: 1,
                arrows: false,
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                speed: 800,
            }
            }>
                {sliderImg.map((item, key) => {
                    return (
                        <SplideSlide key={key}>
                            <img src={item.image} alt='hero' />
                            <h1 className='hero-block__title'>{item.text}</h1>
                        </SplideSlide>
                    )
                })}
            </Splide >
        </section>
    )
}

export default HeroSlider;
