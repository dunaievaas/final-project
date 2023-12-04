import { React, useState, useEffect } from "react";

function WishListCounter() {
    const [wishListCount, setWishListCount] = useState(() => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');

        return wishList.length;
    })

    useEffect(() => {
        const countInterval = setInterval(() => {
            const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
            setWishListCount(wishList.length)
        }, 500)

        return () => {
            clearInterval(countInterval)
        }
    }, [])

    return wishListCount ? (
        <span>{wishListCount}</span>
    ) : (
        false
    )
}

export default WishListCounter
