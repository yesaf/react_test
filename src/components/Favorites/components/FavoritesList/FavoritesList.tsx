import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import favoritesAtom from '../../../../store/favorites';
import { ListContainer, List, ControlBar, ClearButton } from './FavoritesListElements';
import toursDataAtom from '../../../../store/toursData';
import FavoriteItem from './components/FavoriteItem/FavoriteItem';


const FavoritesList = () => {
    const tours = useRecoilValue(toursDataAtom);
    const [favorites, setFavorites] = useRecoilState(favoritesAtom);

    const favoriteTours = useMemo(() => {
        return tours.filter(tour => favorites.includes(tour.id))
    }, [favorites, tours])

    const clearFavorites = () => {
        setFavorites([]);
    };


    return (
        <ListContainer>
            <ControlBar>
                <ClearButton onClick={clearFavorites}>Clear all</ClearButton>
            </ControlBar>
            <List>
                {
                    favoriteTours.map((tour) =>
                        <FavoriteItem tourData={tour}/>)
                }
            </List>
        </ListContainer>
    );
};

export default FavoritesList;
