import React, { useRef } from 'react';
import Banner from './components/Banner/Banner';
import PopularTours from './components/PopularTours/PopularTours';

const Home = () => {
    const popularRef = useRef<HTMLElement | null>(null);

    const setRef = (htmlElement: HTMLElement) => {
        popularRef.current = htmlElement;
    }

    return (
        <>
            <div className="Home">
                <Banner popularRef={popularRef}/>
                <PopularTours setRef={setRef}/>
            </div>
        </>

    );
};

export default Home;
