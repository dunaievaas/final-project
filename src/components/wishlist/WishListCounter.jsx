import { React, useState, useEffect } from "react";

function WishListCounter() {
    const [wishListCount, setWishListCount] = useState(() => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
        //значення за замовчуванням куди приходу функція яка дістає рецепти

        return wishList.length;
    })

    useEffect(() => {
        const countInterval = setInterval(() => {
            const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');
            setWishListCount(wishList.length)
        }, 500)

        return () => {
            clearInterval(countInterval)
            //коли компонент знищується потрібно видалити setInterval
        }
    }, [])

    return wishListCount ? (
        <span>{wishListCount}</span>
    ) : (
        false
    )
}

export default WishListCounter
