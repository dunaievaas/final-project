import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Catecory() {
    return (
        <section className='category-list'>
            <div className='container'>
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
            </div>
        </section>
    )
}

const List = styled.div`
display: flex;
justify-content: space-around;
padding: 0 15rem;
margin: 3rem 0;
`;

const StyleNavLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
gap: 15px;
text-decoration: none;
background: linear-gradient(0deg, rgba(0,136,0,1) 2%, rgba(240,245,0,1) 100%);
height: 80px;
width: 80px;
transition: transform 0.3s ease-in-out;

    h4 { 
        color: #fff;
        font-size: 10px;
    }

   svg {
    color: #fff;
   }

   &.active {
    background: linear-gradient(35deg, rgba(0,0,0,1) 0%, rgba(228,226,220,1) 100%);
   }

   &:hover {
    transform: scale(1.5);
   }
`;

export default Catecory
