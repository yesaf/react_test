import React, { memo } from 'react';
import { Tour } from '@/types/QueryTypes';
import {
    PaddingContainer, TourContainer,
    ImageContainer, Image,
    BgContainer, ImageBg,
    Title, Subtitle,
    ActionsContainer, BuyAction, LikeAction,
} from './TourElements';
import { useRecoilState } from 'recoil';
import favoritesAtom from '../../../../../../store/favorites';
import { ReactComponent as SvgFavoriteEmpty } from '../../../../../../shared/favorite-empty.svg';
import { ReactComponent as SvgFavoriteFilled } from '../../../../../../shared/favorite-filled.svg';


interface TourProps {
    tourData: Tour;
}

const TourItem = (props: TourProps) => {
    const [favorites, setFavorites] = useRecoilState(favoritesAtom);
    const [imageWidth, imageHeight] = [390, 260];

    const addFavorite = (tourId: string) => {
        setFavorites((oldFavorites) => {
            return oldFavorites.includes(tourId) ? oldFavorites : [...oldFavorites, tourId];
        });
    };

    const deleteFavorite = (tourId: string) => {
        setFavorites((oldFavorites) => [...oldFavorites.filter(id => id !== tourId)]);
    };

    return (
        <PaddingContainer>
            <TourContainer width={imageWidth} height={500}>
                <ImageContainer>
                    <BgContainer width={imageWidth} height={imageHeight}>
                        <ImageBg
                            src={props.tourData.flight!.links.flickr_images[0]}
                            width={imageWidth}
                            height={imageHeight}
                        />
                    </BgContainer>
                    <Image
                        src={props.tourData.flight!.links.flickr_images[0]}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </ImageContainer>
                <Title>{props.tourData.title}</Title>
                <Subtitle>{props.tourData.flight!.mission_name}</Subtitle>
                <ActionsContainer>
                    <BuyAction>Buy</BuyAction>
                    <LikeAction>
                        {
                            favorites.includes(props.tourData.id) ?
                                <SvgFavoriteFilled
                                    onClick={() => deleteFavorite(props.tourData.id)}/>
                                :
                                <SvgFavoriteEmpty
                                    onClick={() => addFavorite(props.tourData.id)}/>

                        }
                    </LikeAction>
                </ActionsContainer>
            </TourContainer>
        </PaddingContainer>

    );
};

export default memo(TourItem);
