import React, { useState } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
type Props = {
    banner: string[]
};

const Banner: React.FC<Props> = (props) => {
    const [config, setConfig] = useState({
        loop: true,
        autoplay: {
            delay: 1500
        },
        pagination: {
            el: '.swiper-pagination'
        }
    })
    return (
        <AwesomeSwiper className='banner' config={config}>
            <div className='swiper-wrapper'>
                {props?.banner?.map((item, index) => (
                    <div className='swiper-slide' key={index}>
                        <img alt='banner' src={item} />
                    </div>
                ))}
            </div>
            <div className='swiper-pagination'></div>
        </AwesomeSwiper>
    );
};

export default Banner