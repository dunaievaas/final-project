import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import StyleNavLink from './StyleNavLink';

function Catecory() {
    return (

        <List>
            <StyleNavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyleNavLink>
            <StyleNavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </StyleNavLink>
            <StyleNavLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </StyleNavLink>
            <StyleNavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </StyleNavLink>
        </List>
    )
}

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 3rem;
margin: 3rem 0;

@media only screen and (max-width: 768px){
gap: 2rem;
}
`;

export default Catecory
