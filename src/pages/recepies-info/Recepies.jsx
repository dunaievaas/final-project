import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SimilarRecepies from '../../components/similar-recepies/SimilarRecepies';

function Recepies() {
    const ref = useRef(null);
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('inctructions');

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            const detailData = await data.json();

            setDetails(detailData);
        };

        fetchDetails();
    }, [params.id]);

    const scrollToElement = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToElement();
    }, [details]);

    return (
        <section className='recepie'>
            <div className='container'>
                <div ref={ref} className='row'>
                    <h3 className='col-12'>{details.title}</h3>
                    <div className='col-4 col-md-12'>
                        <img src={details.image} alt={details.title} />
                    </div>
                    <Info className='col-8 col-md-12'>
                        <BtnWrapper>
                            <button
                                className={['btn', activeTab === 'inctructions' ? 'active' : ''].join(' ')}
                                onClick={() => {
                                    setActiveTab('inctructions');
                                }}
                            >
                                Instructions
                            </button>
                            <button
                                className={['btn', activeTab === 'ingridients' ? 'active' : ''].join(' ')}
                                onClick={() => {
                                    setActiveTab('ingridients');
                                }}
                            >
                                Ingridients
                            </button>
                        </BtnWrapper>
                        {activeTab === 'inctructions' ? (
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                                <p className='inctructions-info' dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                            </div>

                        ) : (
                            <ul className='ingridients'>
                                {details.extendedIngredients.map((ingridient) => (
                                    <li key={ingridient.id}>
                                        {ingridient.original}
                                    </li>
                                )
                                )}
                            </ul>
                        )}
                    </Info>
                </div>
                <SimilarRecepies recepieId={params.id} />
            </div>
        </section>
    )
};

const BtnWrapper = styled.div`
display: flex;
gap: 1.5rem;
padding-bottom: 1rem;
`;

const Info = styled.div`
p {
    padding-bottom: 10px;
}

p,
ul {
    line-height: 1.3;
 }
`;

export default Recepies
