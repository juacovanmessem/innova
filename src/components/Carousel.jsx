import Carousel from 'react-bootstrap/Carousel';
import '../styles/CentroMedico.css'

import consultorio1 from '../assets/cons1.jpg'
import consultorio2 from '../assets/cons2.jpg'
import consultorio3 from '../assets/cons3.jpg'
import consultorio4 from '../assets/cons4.jpg'
import consultorio5 from '../assets/cons5.jpg'



function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={consultorio1} alt="First slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={consultorio2} alt="Second slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={consultorio3} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={consultorio4} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={consultorio5} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;