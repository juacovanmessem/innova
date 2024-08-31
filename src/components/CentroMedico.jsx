import React from 'react';
import Carousels from './Carousel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/CentroMedico.css'
import mcenerg from '../assets/energia.jpg'
import Card from 'react-bootstrap/Card';


// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function CentroMedico() {
  return (
    <>
      <section>
        <Carousels />
      </section>
      <section className="lead mb-2">

        <div>
          <p className="headline p-2 palanquin-dark-regular text-center">Horarios de atención</p>
          <p className="container-md">De 9:00 a 21:00 hrs.</p>
        </div>
        <div className='row g-0 justify-content-center align-items-center mb-3' >
          <p className="headline p-2 palanquin-dark-regular text-center col-12">Ubicación</p>
          <div className='col-12 col-md-6 col-lg-4 p-2'>
            <p className="lead">Ubicado en el corazón del casco viejo de la ciudad de Tafi Viejo.</p>
            <p className="lead"> <i class="bi bi-geo-alt-fill"></i> Av. Alem 325</p>
          </div>
          <MapContainer center={[-26.730418205970878, -65.25829453167059]} zoom={15} className='map-container col-12 col-md-6 col-lg-5' >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-26.730418205970878, -65.25829453167059]}>
              <Popup>
                Av. Alem 325, Tafi Viejo
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div>
          <p className="headline p-2 palanquin-dark-regular text-center">Sistemas de Turnos</p>
          <p className="container-md">Turnos por <a href="https://wa.me/5493816217757" target='blank' className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'> Whatsapp</a> o llamadas al +54 9 381 555-8618</p>
        </div>
      </section>
      <section className='mb-3 lead'>
      <div>
          <p className="headline p-2 palanquin-dark-regular text-center">Médicos atendiendo</p>
          <div className='container-md'>
            <article  className='show'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mcenerg} />
                <Card.Body>
                  <Card.Title>Andy Villarruel</Card.Title>
                  <Card.Text>
                    Médica energética, Coach Business, Coach Ontológico, Conteslaciones Familiares, Access the Bars
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default CentroMedico;