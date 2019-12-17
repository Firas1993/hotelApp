import React from 'react';

import {Link} from "react-router-dom";

import Banner from "../component/Banner";
import Hero from '../component/Hero';
const Home = () => {
    return (
            <Hero>
                <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
    );
}

export default Home;
