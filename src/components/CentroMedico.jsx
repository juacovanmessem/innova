import React from 'react';
import Carousels from './Carousel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/CentroMedico.css'
import mcenerg from '../assets/energia.jpg'
import PabloR from '../assets/PabloR.jpg'
import bGuti from '../assets/BiancaGutierrez.jpg'
import eCoronel from '../assets/EmiliaCoronel.jpg'
import eLongo from '../assets/EugeniaLongo.jpg'
import fCallejas from '../assets/FacundoCallejas.jpg'
import lRodri from '../assets/LuciaRodriguez.jpg'
import mGil from '../assets/MacarenaGil.jpg'
import mFabiana from '../assets/MariaFabianaMoyano.jpg'
import mMuñoz from '../assets/MarisaMuñozMolina.jpg'
import mGonz from '../assets/MercedesGonzales.jpg'
import rRitot from '../assets/RominaRitortoPiera.jpg'
import Card from 'react-bootstrap/Card';


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
          <p className="container-md fs-3">Turnos por <a href="https://wa.me/5493816217757" target='blank' className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'> Whatsapp</a> o llamadas al +54 9 381 555-8618</p>
        </div>
      </section>
      <section className='mb-3 lead'>
      <div>
          <p className="headline p-2 palanquin-dark-regular text-center">Médicos atendiendo</p>
          <div className='row g-0 justify-content-center'>
            <article  className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={mcenerg} />
                <Card.Body>
                  <Card.Title>CPN Andy Villarruel</Card.Title>
                  <Card.Text>
                    Coach
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={PabloR} />
                <Card.Body>
                  <Card.Title>Lic. Pablo Rodero</Card.Title>
                  <Card.Text>
                    Psicólogo
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={lRodri} />
                <Card.Body>
                  <Card.Title>Lic. Ana Lucía Rodriguez</Card.Title>
                  <Card.Text>
                    Psicóloga
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={rRitot}/>
                <Card.Body>
                  <Card.Title>Dra. Romina Ritorto Piera</Card.Title>
                  <Card.Text>
                    Psiquiatra
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={mMuñoz} />
                <Card.Body>
                  <Card.Title>Lic. Marisa Muñoz Molina</Card.Title>
                  <Card.Text>
                    Fonoaudiologa
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={bGuti} />
                <Card.Body>
                  <Card.Title>Lic. Bianca Gutiérrez</Card.Title>
                  <Card.Text>
                    Nutricionista
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={eLongo} />
                <Card.Body>
                  <Card.Title>Dra. Eugenia Longo</Card.Title>
                  <Card.Text>
                    Obstetra / Ginecologa
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={mFabiana} />
                <Card.Body>
                  <Card.Title>Lic. María Fabiana Moyano</Card.Title>
                  <Card.Text>
                    Fonoaudiologa
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={fCallejas} />
                <Card.Body>
                  <Card.Title>Lic. Facundo Callejas</Card.Title>
                  <Card.Text>
                    Psicopedagogo
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={eCoronel} />
                <Card.Body>
                  <Card.Title>Lic. Emilia Coronel</Card.Title>
                  <Card.Text>
                    Asistene en Estimulación temprana
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={mGonz} />
                <Card.Body>
                  <Card.Title>Dra. Mercedes Gonzáles</Card.Title>
                  <Card.Text>
                    Clinica
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            <article className='show2 col-12 col-md-4 col-lg-3 p-4 justify-content-center'>
              <Card>
                <Card.Img variant="top" src={mGil} />
                <Card.Body>
                  <Card.Title>Lic. Macarena Gil</Card.Title>
                  <Card.Text>
                    Psicopedagoga
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