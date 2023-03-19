import React from 'react';
import Header from '../component/Header/Header';
import Navbar from '../component/Navbar/Navbar';
import SwiperSlide from '../component/Swiper/Swiper';
import CardList from '../component/CardList/CardList';

const Home = () => {
    

    return (
        <div>
            <main>
                <SwiperSlide />
                <CardList />
            </main>
        </div>
    );
}

export default Home;
