import React from 'react';

import {Link} from "react-router-dom";

import Banner from "../component/Banner";
import Hero from '../component/Hero';
const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
            <Banner title="Our Rooms">
               <Link to="/" className="btn-primary">return home</Link>
            </Banner>
            </Hero>
        </div>
    );
}

export default Rooms;
