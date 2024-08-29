import React from 'react'
import cuadrado from'../assets/consultorio.jpg'

function AlquilerConsultorio() {
  return (
    <>
      <section className='mt-3 lead'>
      <div className=' bg-3 w-100 p-2 mb-2'>
          <p className="container-md">Como especialistas en comunicación y atención personalizada en el área de la salud, nuestro objetivo es ofrecer un espacio totalmente confortable y una atención integral y personalizada para tus pacientes, siempre con un enfoque en la excelencia.</p>
        </div>
        <h2 className='headline text-center p-2 palanquin-dark-regular'>Sobre los consultorios</h2>
        <div className='container-md'>
          <p>Para tu comodidad, nuestros consultorios médicos cuenta con:</p>
          <ul>
            <li  className='show'>Consultorios equipados con mobiliario moderno.</li>
            <li className='show'>Recepcionistas dedicados a brindar acompañamiento desde el ingreso hasta la finalización de la consulta.</li>
            <li className='show'>Wi-fi de alta velocidad.</li>
            <li className='show'>Cámaras de seguridad.</li>
            <li className='show'>Música ambiental.</li>
            <li className='show'>Sala de espera confortable y climatizada.</li>
          </ul>
          <p className='show'>Contamos con 3 consultorios disponibles en la ciudad de Tafí Viejo.</p>
          <p className='show'>Ubicacion exacta: Av. Alem 325</p>
          <p className='show'>Medidas:</p>
          <div className='row g-0 align-items-center show'>
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
          <p  className='show'> Todos los consultorios se encuentran equipados según la necesidad del profesional.</p>
        </div>
      </section>
      <section className='lead show'>
        <h2 className='headline text-center p-2 palanquin-dark-regular'>Metodologia de alquiler</h2>
        <ul className='container-md'>
          <li>Alquiler por módulos de 3 y 4 horas.</li>
          <li>Pueden ser ocupados por la mañana, siets o por la tarde.</li>
        </ul>
      </section>
      <section className='lead show'>
        <h4 className='headline-2 p-2 palanquin-dark-regular container-md'>Como parte del alquiler del consultorio te ofrecemos: </h4>
        <ul className='container-md'>
          <li>Sistema de turnos.</li>
          <li>Atención personalizada vía WhatsApp, creando un nuevo canal de comunicación.</li>
          <li>Servicio de facturación, si lo necesitara.</li>
        </ul>
      </section>
    </>
  )
}

export default AlquilerConsultorio