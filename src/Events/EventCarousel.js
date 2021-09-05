import React from "react";
import Slider from "react-slick";
import imageOne from '../assets/img_0631-6727-ver-9.jpeg';
import imageTwo from '../assets/img_0632-5907-ver-9.jpeg';
import imageThree from '../assets/img_0633-6681-ver-9.jpeg';
import imageFour from '../assets/IMG_0054b.jpeg';
import imageFive from '../assets/img_0630-4062-ver-9.jpeg'

import './EventCarousel.css'

const photos = [
  {
    name: 'photo1',
    url: imageOne,
    eventDate:'10/02',
    eventDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus.'
  },
  {
    name: 'photo2',
    url: imageTwo,
    eventDate:'10/17',
    eventDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus.'
  },
  {
    name: 'photo3',
    url: imageThree,
    eventDate:'10/31',
    eventDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus.'
  },
  {
    name: 'photo4',
    url: imageFour,
    eventDate:'11/13',
    eventDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus.'
  },
  {
    name: 'photo5',
    url: imageFive,
    eventDate:'11/27',
    eventDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus.'
  },
]

function NextArrow(props) {
  return (
    <div className="right-arrow" onClick={props.onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
}

function PrevArrow(props) {
  return (
    <div className="left-arrow" onClick={props.onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider {...settings}>
      {
        photos.map((photo, idx) => (
          idx%2 === 0 
            ? (<div className="item-wrap">
                <div className="overlay-odd"></div>
                <img src={photo.url} alt={photo.name}/>
                <div className="event-date">{photo.eventDate}</div>
                <div className="event-info">{photo.eventDetails}</div>
            </div>)
            : (<div className="item-wrap">
                <div className="overlay-even"></div>
                <img src={photo.url} alt={photo.name}/>
                <div className="event-date">{photo.eventDate}</div>
                <div className="event-info">{photo.eventDetails}</div>
            </div>)
        ))
      }
    </Slider>
  )
}