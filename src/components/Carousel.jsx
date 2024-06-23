import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/desk.jpg'
import img2 from '../assets/waity.jpg'
import img3 from '../assets/images.jpg'
import '../styles/CentroMedico.css'

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="First slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="Second slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;