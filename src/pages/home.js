import React from 'react';

import Header from "../components/Header";
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <p>This is the main page</p>
        </div>
    );
}

export default Home;