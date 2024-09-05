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
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 350 },
    items: 1,
    slidesToSlide: 1
  }
};

const sliderImageUrl = [
  { title: 'Cecilia Goizueta', description: 'Me permiten entregarles a mis pacientes la cercanía, el respeto, la posibilidad de reprogramar un turno, de estar más cerca de médicos de cabecera; y me permite a mí organizarme en mi trabajo. Fue una de las mejores decisiones que pude tomar.'},
  { title: 'Graciela Varela', description: 'Hace más de un año todo el equipo de innova me viene acompañando, tanto en la gestión de la comunicación con pacientes de manera online, como también en las redes sociales en las que estoy involucrada. La experiencia siempre fue hermosa. Una calidez humana excepcional, tanto hacia los pacientes como hacia mí. Siempre demostraron un alto nivel de profesionalismo.'},
  { title: 'Laura Vanelli', description: 'La verdad que estamos muy contentas. La página y los cursos funcionan bárbaro. Tenemos continuidad que eso era lo que más nos costaba, son super profesionales. Espero que sigamos todos juntos avanzando.'},
  { title: 'Karina Gallardo', description: 'Vuestro valioso trabajo y organización son esenciales para el desarrollo de mi tarea cada día. Muchisimas gracias innova por todo su esfuerzo y dedicación.'},
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
        autoPlaySpeed={20000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        beforeChange={handleBeforeChange}  // Esto actualiza el índice antes de que se mueva el carrusel
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div 
              key={index} 
              className={`border-4 border slider` }
            >
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
