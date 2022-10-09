import React, { useEffect } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import TourService from './services/TourService/TourService';

import { useRecoilState } from 'recoil';
import toursDataAtom from './store/toursData';
import Favorites from './components/Favorites/Favorites';


function App() {
    const [_, setToursData] = useRecoilState(toursDataAtom);
    const tourService = new TourService();

    useEffect(() => {
        const getData = async () => {
            tourService.getToursData(10)
                .then(res => {
                    return (res.data.histories.filter(
                        (data => data.flight ?
                            data.flight.links.flickr_images.length > 0 : false)));
                })
                .then(res => {
                    setToursData(res);
                });
        };

        getData();
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/"
                           element={
                               <Layout active="Home">
                                   <Home/>
                               </Layout>
                           }
                    />

                    <Route path="/favorites"
                           element={
                               <Layout active="Favorites">
                                   <Favorites/>
                               </Layout>
                           }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
