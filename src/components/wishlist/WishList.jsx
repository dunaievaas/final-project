import React, { useState, useEffect } from 'react'
import Card from '../card/Card';
import Grid from '../grid/Grid.styled';

function WishList() {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const wishList = JSON.parse(localStorage.getItem('wishlist') || '[]');

        setWishList(wishList);
    }, [])

    return wishList.length ? (
        <Grid>
            {wishList.map((item) => (
                <Card key={item.id} item={item} setWishList={setWishList} />
            ))}
        </Grid>
    ) : (
        <p>Nothing added to your wishlist.</p>
    )
}

export default WishList
