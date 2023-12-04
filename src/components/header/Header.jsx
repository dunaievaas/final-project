import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import WishListCounter from "../wishlist/WishListCounter";
import SearchAutoComplete from "../search-bar/SearchAutoComplete";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Nav from './Nav.styled';

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
