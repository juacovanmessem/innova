import React from 'react'
import '../styles/Serivicos.css'
import bt1 from '../assets/bt-1.jpg'
import bt2 from '../assets/bt-2.jpg'
import bt3 from '../assets/bt-3.jpg'
import bt4 from '../assets/bt-4.jpg'
import Swal from 'sweetalert2'

function Servicios() {

  function handleClickAlert(type, description) {
    Swal.fire({
      title: String(type),
      text: String(description),
      color: "#19577A",
      background: "#F6F5E8",
      backdrop: `#1d4355b5`,
      confirmButtonColor:'#19577A',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  return (
    <>
      <section className='my-4'>
        <div className='text-center'>
          <h1 className='palanquin-dark-regular p-2 mb-4 headline'>NUESTROS SERVICIOS</h1>
        </div>
        <div className='row g-0 justify-content-evenly'>
        <button className='rounded col-11 col-md-5 col-lg-2 bg-2 mb-2' onClick={() => handleClickAlert('Atencion al cliente en WhatsApp y redes sociales:','Ofrecemos una atención personalizada excepcional ne cada mensaje. Gestionamos las interacciones brindando privacidad, empatía y cercanía con cada paciente. En INNOVA, cada mensaje es una oportunindad para construir relaciones sólidas')}>
            <img src={bt1} className='img-fluid' alt="Atención al Cliente"/>
            Atención al Cliente
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bg-2 mb-2' onClick={() => handleClickAlert('Secretaría Administrativa / Ejecutiva:','Libera tu tiempo de las tareas administrativas que consumen energía. Nos encargamos de la gestión eficiente de tu agendad, correos electrónicos y otras responsabilidades administrativas para que puedas enfocarte plenamente en tu tarea principal: la atención de tus pacientes.')}>
            <img src={bt2} className='img-fluid' alt="Secretaria Administrativa y Ejecutiva"/>
            Secretaria Administrativa y Ejecutiva
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bg-2 mb-2' onClick={() => handleClickAlert('Community Manager:','Potenciamos tu presencia en redes sociales. Desde análisis de cuentas hasta estrategias de publicaciones, diseño, copy y respuestas en inbox, nuestro equipo de Social y Community Managers está dedicado a hacer brillar tu marca personal. Construimos conexiones significativas en el mundo digital.')}>
            <img src={bt3} className='img-fluid' alt="Community Manager"/>
            Community Manager
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bg-2 mb-2' onClick={() => handleClickAlert('Asistencia en herramientas digitales:','Nos mantenemos a la vanguardia de la digitalización. Ofrecemos asistencia en plataformas y herramientas digitales.')}>
            <img src={bt4} className='img-fluid' alt="Asistencia con herramientas y plataformas digitales"/>
            Asistencia con herramientas y plataformas digitales
          </button>
        </div>
      </section>
      <section className='mt-2 mb-5'>
        <div className='text-center'>
          <h1 className='palanquin-dark-regular p-2 mb-2 headline-2'>BENEFICIOS</h1>
        </div>
        <div>
          <ul className='list-group list-group-flush text-center container-md'>
            <li className='list-group-item lead py-0'> Ahorra tiempo y espacio físico</li>
            <li className='list-group-item lead py-0'> Sin cargas sociales ni material de oficina</li>
            <li className='list-group-item lead py-0'> Asesoramiento profesional permanente</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Servicios