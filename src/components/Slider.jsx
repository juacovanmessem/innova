import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/SobreNosotros.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1
  }
};

const sliderImageUrl = [
  { title: 'item 1', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 2', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 3', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 4', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 5', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 6', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 7', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 8', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 9', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''},
  { title: 'item 10', description: 'descripcion 1', url: "https://picsum.photos/200" ,logo:''}
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (nextSlide) => {
    setCurrentIndex(nextSlide);
  };

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        beforeChange={handleBeforeChange}  // Esto actualiza el índice antes de que se mueva el carrusel
      >
        {sliderImageUrl.map((imageUrl, index) => {
          const isHighlighted = index === currentIndex % sliderImageUrl.length;
          return (
            <div 
              key={index} 
              className={`border-4 border slider ${isHighlighted ? 'highlighted' : ''}` }
            >
              <img src={imageUrl.url} alt={imageUrl.title}/>
              <h3 className="display-6 text-center">{imageUrl.title}</h3>
              <p className="lead text-center">{imageUrl.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
