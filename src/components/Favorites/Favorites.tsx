import React from 'react';
import FavoritesList from './components/FavoritesList/FavoritesList';
import FavoritesBanner from './components/Banner/FavoritesBanner';
import { FavoritesContainer } from './FavoritesElements';


const Favorites = () => {
    return (
        <FavoritesContainer>
            <FavoritesBanner/>
            <FavoritesList/>
        </FavoritesContainer>
    );
};

export default Favorites;
