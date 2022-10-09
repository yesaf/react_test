import React, { MutableRefObject, useState } from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import {
    CarouselContainer,
    Circle,
    TextContainer,
    BannerText,
    ImageNoBg,
    ExploreButton,
} from './BannerElements';
import SimplyCarousel from 'react-simply-carousel';


interface BannerProps {
    popularRef: MutableRefObject<any>;
}

const Banner = (props: BannerProps) => {
    const { width } = useWindowDimensions();
    const height = 640;
    const textTop = 'The space is waiting for';
    const textBottom = 'YOU';
    const slides = [
        './Banner-Rideshare.webp',
        './Banner-Crew-Dragon.webp',
        './Banner-HS-hero.webp',
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <CarouselContainer>
            <TextContainer top={100}>
                <BannerText
                    fontSize={48}
                >
                    {textTop}
                </BannerText>
                <BannerText
                    fontSize={310}
                >
                    {textBottom}
                </BannerText>
            </TextContainer>
            <ExploreButton
                onClick={() => {
                    props.popularRef.current?.scrollIntoView({behavior: 'smooth'})
                }}
            >
                {`Explore tours  `}
                <svg width="24" height="24"
                     xmlns="http://www.w3.org/2000/svg"
                     fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521
                    9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
                    fill="white"
                    />
                </svg>
            </ExploreButton>
            <SimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                containerProps={{
                    style: {
                        position: 'relative',
                        backgroundColor: 'black',
                    },
                }}
                forwardBtnProps={{
                    show: false,
                }}
                backwardBtnProps={{
                    show: false,
                }}
                speed={400}
                dotsNav={{
                    show: true,
                    containerProps: {
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 0.8 * height,
                        },
                    },
                    itemBtnProps: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            margin: '10px',
                            border: '2px solid white',
                            backgroundColor: 'transparent',
                            height: '16px',
                            width: '16px',
                            padding: '2px',
                            borderRadius: '100%',
                        },
                    },
                    activeItemBtnProps: {
                        children: <Circle/>,
                    },
                }}
            >
                {
                    slides.map((slide) => {

                        const keyRegex = /(?<=-)(.*?)(?=\.)/; // find text between - and .

                        return (
                            <ImageNoBg
                                image={slide}
                                width={width}
                                height={height}
                                key={slide.match(keyRegex)![0]}
                            />
                        );
                    })
                }
            </SimplyCarousel>
        </CarouselContainer>
    );
};

export default Banner;
