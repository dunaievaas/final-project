import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export default StyleNavLink;
