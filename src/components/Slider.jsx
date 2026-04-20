import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 350 },
    items: 1,
    slidesToSlide: 1,
  },
};

const testimonios = [
  {
    title: "Cecilia Goizueta",
    rating: 5,
    description:
      "Me permiten entregarles a mis pacientes la cercanía, el respeto, la posibilidad de reprogramar un turno, de estar más cerca de médicos de cabecera; y me permite a mí organizarme en mi trabajo. Fue una de las mejores decisiones que pude tomar.",
  },
  {
    title: "Graciela Varela",
    rating: 5,
    description:
      "Hace más de un año todo el equipo de NEXA me viene acompañando, tanto en la gestión de la comunicación con pacientes de manera online, como también en las redes sociales. La experiencia siempre fue hermosa. Una calidez humana excepcional, tanto hacia los pacientes como hacia mí. Siempre demostraron un alto nivel de profesionalismo.",
  },
  {
    title: "Laura Vanelli",
    rating: 5,
    description:
      "La verdad que estamos muy contentas. La página y los cursos funcionan bárbaro. Tenemos continuidad que eso era lo que más nos costaba, son super profesionales. Espero que sigamos todos juntos avanzando.",
  },
  {
    title: "Karina Gallardo",
    rating: 5,
    description:
      "Vuestro valioso trabajo y organización son esenciales para el desarrollo de mi tarea cada día. Muchísimas gracias NEXA por todo su esfuerzo y dedicación.",
  },
];

/* Genera las iniciales del nombre para el avatar */
const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

/* Renderiza estrellas rellenas / vacías */
const Stars = ({ rating, max = 5 }) => (
  <div className="sl-stars" aria-label={`${rating} de ${max} estrellas`}>
    {Array.from({ length: max }).map((_, i) => (
      <svg
        key={i}
        className={`sl-star ${i < rating ? "sl-star--on" : "sl-star--off"}`}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5z"
          strokeLinejoin="round"
        />
      </svg>
    ))}
  </div>
);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="sl-parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={20000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="sl-dot-list"
        beforeChange={(nextSlide) => setCurrentIndex(nextSlide)}
      >
        {testimonios.map((t, index) => (
          <div key={index} className="sl-bubble-wrap">
            <div className="sl-bubble">
              {/* comilla decorativa */}
              <span className="sl-quote-icon" aria-hidden="true">"</span>

              {/* texto del testimonio */}
              <p className="sl-text">{t.description}</p>

              {/* cola de la burbuja */}
              <div className="sl-tail" />
            </div>

            {/* avatar + nombre + estrellas */}
            <div className="sl-author">
              <div className="sl-avatar">{getInitials(t.title)}</div>
              <div className="sl-author-info">
                <p className="sl-name">{t.title}</p>
                <Stars rating={t.rating} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
