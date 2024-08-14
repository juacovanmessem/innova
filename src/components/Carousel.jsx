import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Captura de pantalla 2024-07-25 194439.jpg'
import img2 from '../assets/Captura de pantalla 2024-07-25 194500.jpg'
import img3 from '../assets/Captura de pantalla 2024-07-25 194516.jpg'
import img4 from '../assets/Captura de pantalla 2024-07-25 194540.jpg'
import img5 from '../assets/Captura de pantalla 2024-07-25 194606.jpg'
import img6 from '../assets/Captura de pantalla 2024-07-25 194638.jpg'
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
      <Carousel.Item>
        <img src={img4} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} alt="Third slide" className='img-carousel' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;