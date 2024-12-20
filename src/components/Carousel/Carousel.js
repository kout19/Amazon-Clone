import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './data/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css';
const CarouselComponent = () => {  
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
       {img.map((imageItemLink)=>{
        return <img src={imageItemLink}/>
       })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default CarouselComponent;
  