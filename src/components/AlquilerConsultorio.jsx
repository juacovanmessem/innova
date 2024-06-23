import React from 'react'
import cuadrado from'../assets/consultorio.jpg'

function AlquilerConsultorio() {
  return (
    <>
      <section className='mt-3 lead'>
        <h2 className='headline text-center p-2 palanquin-dark-regular'>Sobre los consultorios</h2>
        <div className='container-md'>
          <p>Para tu comodidad, nuestros consultorios médicos cuenta con:</p>
          <ul>
            <li>Consultorios equipados con mobiliario moderno.</li>
            <li>Recepcionistas dedicados a brindar acompañamiento desde el ingreso hasta la finalización de la consulta.</li>
            <li>Wi-fi de alta velocidad.</li>
            <li>Cámaras de seguridad.</li>
            <li>Música ambiental.</li>
            <li>Sala de espera confortable y climatizada.</li>
          </ul>
          <p>Contamos con 3 consultorios disponibles en la ciudad de Tafí Viejo.</p>
          <p>Ubicacion exacta: Av. Alem 325</p>
          <p>Medidas:</p>
          <div className='row g-0 align-items-center'>
            <div className='col-12 col-md-3 col-lg-2'>
              <img src={cuadrado} className='img-fluid' />
            </div>
            <div className='col'>
              <ul>
                <li>Consultorio 1: 3.10 x 2.20 m</li>
                <li>Consultorio 2: 3.10 x 3.30 m</li>
                <li>Consultorio 3: 3.10 x 2.80 m</li>
              </ul>
            </div>
          </div>
          <p> Todos los consultorios se encuentran equipados según la necesidad del profesional.</p>
        </div>
      </section>
      <section className='lead'>
        <h2 className='headline text-center p-2 palanquin-dark-regular'>Metodologia de alquiler</h2>
        <ul className='container-md'>
          <li>Los consultorios ofrecen diferentes horarios.</li>
          <li>Pueden ser ocupados por la mañana, siets o por la tarde.</li>
          <li>El profesional puede alquilarlos por módulo.</li>
        </ul>
      </section>
      <section className='lead'>
        <h4 className='headline-2 p-2 palanquin-dark-regular container-md'>Como parte del alquiler del consultorio te ofrecemos: </h4>
        <ul className='container-md'>
          <li>Sistema de turnos.</li>
          <li>Atención personalizada vía WhatsApp, creando un nuevo canal de comunicación.</li>
          <li>Servicio de facturación, si lo necesitara.</li>
        </ul>
      </section>
      <section>
        <h3 className='text-center headline palanquin-dark-regular'>Te esperamos!</h3>
      </section>
    </>
  )
}

export default AlquilerConsultorio