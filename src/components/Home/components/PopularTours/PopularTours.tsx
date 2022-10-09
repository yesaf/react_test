import React, { useCallback, useMemo, useState } from 'react';
import TourItem from './components/Tour/TourItem';
import {
    CarouselContainer,
    Circle,
    TopBarContainer,
    ButtonsContainer,
    NavButton,
    Heading,
} from './PopularToursElements';
import SimplyCarousel from 'react-simply-carousel';
import { useRecoilValue } from 'recoil';
import toursDataAtom from '../../../../store/toursData';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface Props {
    setRef(htmlElement: HTMLElement | null): void;
}

const PopularTours = (props: Props) => {

    const {width} = useWindowDimensions()
    const tours = useRecoilValue(toursDataAtom);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const scrollCount = useMemo(() => {
        return width < 1200 ? 2 : 3;
    }, [width])

    const selectPrevious = () => {
        if (activeSlideIndex - scrollCount >= 0) {
            setActiveSlideIndex(activeSlideIndex-scrollCount)
        }
    }

    const selectNext = () => {
        if (activeSlideIndex + scrollCount <= tours.length - 1) {
            setActiveSlideIndex(activeSlideIndex+scrollCount)
        }
    }

    const handleRef = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            props.setRef(node);
        }
    }, []);



    if (!tours.length) {
        return (<></>);
    }

    return (
        <CarouselContainer ref={handleRef}>
            <TopBarContainer>
                <Heading>Popular tours</Heading>
                <ButtonsContainer>
                    <NavButton onClick={selectPrevious}
                               disabled={!(activeSlideIndex - scrollCount >= 0)}>
                        {`<`}
                    </NavButton>

                    <NavButton onClick={selectNext}
                               disabled={!(activeSlideIndex + scrollCount <= tours.length - 1)}>
                        {`>`}
                    </NavButton>
                </ButtonsContainer>
            </TopBarContainer>
            <SimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                infinite={false}
                responsiveProps={[
                    {maxWidth: 1200, itemsToShow: 2, itemsToScroll: 2},
                    {minWidth: 1200, itemsToShow: 3, itemsToScroll: 3}
                ]}
                containerProps={{
                    style: {
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
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
                            justifyContent: 'center',
                            // position: 'absolute',
                        },
                    },
                    itemBtnProps: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            margin: '10px',
                            border: '2px solid black',
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
                    tours.map((tour) => {
                        return (
                            <TourItem tourData={tour} key={tour.id}/>
                        );
                    })
                }
            </SimplyCarousel>
        </CarouselContainer>
    );
};

export default PopularTours;
