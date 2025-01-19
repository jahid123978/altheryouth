import React, { useState } from 'react';
import community_1 from "../../assets/images/community_1.jpg"
import community_2 from "../../assets/images/community_2.jpg"
import community_3 from "../../assets/images/community_3.jpg"
import community_4 from "../../assets/images/community_4.jpg"
import community_5 from "../../assets/images/community_5.jpg"
import community_6 from "../../assets/images/community_6.jpg"
import community_7 from "../../assets/images/community_7.jpg"
import community_8 from "../../assets/images/community_8.jpg"
import community_9 from "../../assets/images/community_9.jpg"
import community_10 from "../../assets/images/community_10.jpg"
import community_11 from "../../assets/images/community_11.jpg"
import community_12 from "../../assets/images/community_12.jpg"
import community_13 from "../../assets/images/community_13.jpg"
import community_14 from "../../assets/images/community_14.jpg"
import community_15 from "../../assets/images/community_15.jpg"
import community_16 from "../../assets/images/community_16.jpg"
import community_17 from "../../assets/images/community_17.jpg"
import community_18 from "../../assets/images/community_18.jpg"
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import '../../styles/style.css'; // Adjust the path as needed

const Swapbar = () => {
  const images = [
    community_1, community_2, community_3, community_4, community_5, community_6, community_7, community_8, community_9, community_10, community_11, community_12, community_13, community_14, community_15, community_16, community_17, community_18
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    if(currentImageIndex >= 0 && currentImageIndex < 18)
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    if(currentImageIndex >= 0 && currentImageIndex < 18)
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="swapbar-container">
        <div className='swapbar-arrow-container'>
        <div className="swapbar-arrow-left" onClick={handlePrev}><MdOutlineKeyboardArrowLeft/></div>
        <div className="swapbar-arrow-right" onClick={handleNext}><MdKeyboardArrowRight/></div>
        </div>
      
      <div className="swapbar-item">
        <img className='swapbar-item-img1' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <img className='swapbar-item-img2' src={images[currentImageIndex+1]} alt={`Image ${currentImageIndex + 2}`} />
        <img className='swapbar-item-img3' src={images[currentImageIndex+2]} alt={`Image ${currentImageIndex + 3}`} />
        <img className='swapbar-item-img4' src={images[currentImageIndex+3]} alt={`Image ${currentImageIndex + 4}`} />
      </div>
      
    </div>
  );
};

export default Swapbar;
