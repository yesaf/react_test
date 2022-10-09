import React from 'react';
import { Tour } from '@/types/QueryTypes';
import {
    TourContainer,
    ImageContainer, Image,
    BgContainer, ImageBg,
    Title, Subtitle,
    ActionsContainer, BuyAction, DeleteAction,
} from './FavoriteItemElements';
import { useRecoilState } from 'recoil';
import favoritesAtom from '../../../../../../store/favorites';
import { ReactComponent as SvgDelete } from '../../../../../../shared/delete.svg';


interface FavoriteItemProps {
    tourData: Tour;
}

const FavoriteItem = (props: FavoriteItemProps) => {
    const [_, setFavorites] = useRecoilState(favoritesAtom);
    const [imageWidth, imageHeight] = [390, 260];


    const deleteFavorite = (tourId: string) => {
        setFavorites((oldFavorites) => [...oldFavorites.filter(id => id !== tourId)]);
    };

    return (
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
                <DeleteAction>
                    <SvgDelete
                        onClick={() => deleteFavorite(props.tourData.id)}/>
                </DeleteAction>
            </ActionsContainer>
        </TourContainer>
    );
};

export default FavoriteItem;
