import React, { useState, useEffect } from 'react';
import sliderBg from "../../assets/images/slider/slider-bg.png";
import item1 from "../../assets/images/slider/item1.png";
import item2 from "../../assets/images/slider/item2.png";
import item3 from "../../assets/images/slider/item3.png";
import item4 from "../../assets/images/slider/item4.png";
import item5 from "../../assets/images/slider/item5.png";

const Slider = () => {
    const sliderItems = [item1, item2, item3, item4, item5];
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem + 1) % sliderItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentItem, sliderItems.length]);

    return (
        <div className="mt-5 bg-cover bg-center bg-no-repeat min-h-full" style={{ backgroundImage: `url(${sliderBg})` }}>
            <img src={sliderItems[currentItem]} className='p-20' alt="" />
        </div>
    );
};

export default Slider;
