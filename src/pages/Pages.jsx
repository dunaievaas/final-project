import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './cuisine/Cuisine';
import Searched from './searched-recepie/Searched';
import Recepies from './recepies-info/Recepies';
import WishListPage from './WishListPage';

function Pages() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:id' element={<Recepies />} />
            <Route path='/wishlist' element={<WishListPage />} />
        </Routes>

    );
}

export default Pages
