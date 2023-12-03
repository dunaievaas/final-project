import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { GiKnifeFork } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import WishListCounter from "../wishlist/WishListCounter";
import SearchAutoComplete from "../search-bar/SearchAutoComplete";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [activeSearch, setActiveSearch] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <Nav>
                    <Link className="logo-home link" to={'/'}>
                        <GiKnifeFork />
                        Delisious
                    </Link>
                    <SearchAutoComplete className={activeSearch ? 'active' : ''} />
                    <div className='nav-icons'>
                        {activeSearch ? (
                            <IoClose className='only-mobile' onClick={() => setActiveSearch(false)} />
                        ) : (
                            <IoSearchSharp className='only-mobile' onClick={() => setActiveSearch(true)} />
                        )}
                        <Link className="wishlist link" to={'/wishlist'}>
                            <IoIosHeartEmpty />
                            Wishlist
                            <WishListCounter />
                        </Link>
                    </div>
                </Nav>
            </div>
        </header>
    )
}

const Nav = styled.nav` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 3rem;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    .MuiAutocomplete-root {
      order: 3;
    }
  }

  svg {
    font-size: 1.5rem;
  }
`;
