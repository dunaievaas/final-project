import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

function Card({ item, setWishList = () => { } }) {
    return (
        <div className='card'>
            <WishListIcons item={item} setWishList={setWishList} />
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <Link to={'/recipe/' + item.id}></Link>
        </div>
    )
};

const WishListIcons = ({ item, setWishList = () => { } }) => {
    const [isInWishList, setIsInWishList] = useState(() => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
        return wishList.some((el) => el.id === item.id)
    })

    const addToWishList = (item) => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const newWishList = [...wishList, item];
        localStorage.setItem('wishlist', JSON.stringify(newWishList));
        setWishList(newWishList);
        setIsInWishList(true);
    }

    const deleteFromWishList = (id) => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const newWishList = wishList.filter((el) => el.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(newWishList));
        setWishList(newWishList);
        setIsInWishList(false);
    }

    return (
        <>
            {isInWishList ? (
                <FcLike size={'1.5rem'} style={{ cursor: 'pointer' }} onClick={() => deleteFromWishList(item.id)} />
            ) : (
                <FcLikePlaceholder size={'1.5rem'} style={{ cursor: 'pointer' }} onClick={() => addToWishList(item)} />
            )}
        </>
    )
}

export default Card
