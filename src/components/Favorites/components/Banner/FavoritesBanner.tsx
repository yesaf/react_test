import React  from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import {
    BannerContainer,
    BannerText,
    ImageContainer,
    Image,
} from './FavoritesBannerElements';


const FavoritesBanner = () => {
    const { width } = useWindowDimensions();
    const height = 440;

    return (
        <BannerContainer>
            <BannerText top={height/2}>Favorites</BannerText>
            <ImageContainer width={width} height={height}>
                <Image
                    src="./Banner-HS-hero.webp"
                    width={width}
                    height={height}
                />
            </ImageContainer>
        </BannerContainer>
    );
};

export default FavoritesBanner;
