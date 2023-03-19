import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';

import swiperImg from '../../images/swiperimg.png';
import swiperImg2 from '../../images/swiperimg2.png';
import swiperImg3 from '../../images/swiperimg3.png';
import swiperImg4 from '../../images/swiperimg4.png';
import swiperImg5 from '../../images/swiperimg5.png';

const SwiperS = () => {
    return (
        <div>
            <div style={{height:415}} className="overflow-hidden mb-10 px-2 w-full container mx-auto rounded-xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide><img src={swiperImg} /></SwiperSlide>
                    <SwiperSlide><img src={swiperImg2} /></SwiperSlide>
                    <SwiperSlide><img src={swiperImg3} /></SwiperSlide>
                    <SwiperSlide><img src={swiperImg4} /></SwiperSlide>
                    <SwiperSlide><img src={swiperImg5} /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}

export default SwiperS;
