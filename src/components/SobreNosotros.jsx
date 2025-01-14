import React from 'react'
import '../styles/SobreNosotros.css'
import bg2 from '../assets/fondo.2.jpg'
import Slider from "./Slider";
import naty from '../assets/naty.jpg';


function SobreNosotros() {

  return (
    <>
      <section>
        <div className='container-lg text-center my-2 p-4'>
          <h1 className='headline p-2 palanquin-dark-regular'>¿Quiénes somos?</h1>
            <p className='lead'> 
              En INNOVA, nos especializamos en ofrecer soluciones digitales innovadoras y personalizadas para profesionales que buscan optimizar su presencia en línea y mejorar la eficiencia en sus tareas diarias. Con un equipo dedicado y apasionado, proporcionamos una gama completa de servicios diseñados para satisfacer las necesidades específicas de cada cliente.
            </p>
        </div>
      </section>
      <section className='row g-0'>
        <div className='bg-1 col-12 col-md-6 p-4'>
          <h1 className='text-center palanquin-dark-regular'>NUESTRA MISIÓN</h1>
          <p className='lead'>En INNOVA es "Brindar soluciones digitales innovadoras y personalizadas a profesionales, optimizando su presencia en línea y permitiéndoles centrarse en su área de especialización."</p>
        </div>
        <div className='bg-3  col-12 col-md-6 p-4'>
          <h1 className='text-center palanquin-dark-regular'>NUESTRA VISIÓN</h1>
          <p className='lead'>En INNOVA es: "Convertirnos en líderes reconocidos en el campo de la asistencia digital, siendo el socio preferido para profesionales en la gestión de su presencia en línea."</p>
        </div>
      </section>
      <section>
        <div className='container-lg text-center my-2 p-4'>
          <h1 className='headline p-2 palanquin-dark-regular'>Nuestros Clientes</h1>
            <p className='lead'> 
              Nos enorgullece haber trabajado con reconocídos clientes tanto provinciales como nacionales, brindando siempre un servicio de alta calidad y confianza.
            </p>
        </div>
        <div className='container-md mb-3'>
          <Slider />
        </div>
      </section>
      <section className='p-4' style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
        <div className='container-lg text-center bg-faded my-2 p-4 show'>
          <h1 className='headline palanquin-dark-regular'>TRABAJO EN EQUIPO</h1>
          <p className='lead'>
            En INNOVA, creemos en la fuerza del trabajo colaborativo y diverso. Detrás de cada servicio personalizado y solución eficiente, hay un equipo comprometido que trabaja en conjunto para llevar a cabo nuestra visión. 
            Como líder y guía acompaño al equipo en su desarrollo. Mantenemos canales de comunicación abiertos, fomentando un ambiente donde las ideas son valoradas y las preocupaciones son abordadas.
          </p>
          <p className='lead'>
            Escucha y Mejora Continua:
            La retroalimentación constante es fundamental. Escuchamos activamente a nuestro equipo, creando un entorno donde las opiniones son respetadas. 
            Esta cultura nos permite adaptarnos y evolucionar, no solo como individuos, sino como un equipo sólido. 
            En INNOVA, creemos que el éxito surge de un equipo comprometido que trabaja en armonía hacia metas comunes. Juntos, no solo ofrecemos servicios excepcionales, sino que también construimos un entorno que inspira el crecimiento continuo.
          </p>
        </div>
      </section>
      <section>
        <div className='p-3 text-center'>
          <img src={naty} alt=""  className='img-fluid rounded-circle img-face blue-shadow show'/>
          <p className='lead border-4 border-end border-start rounded-3 p-2 show'>Soy Natalia Chiappino, creadora y Directora de INNOVA. Con una sólida trayectoria en centros médicos y el sector comercial, me destaco por mi responsabilidad, cordialidad y espíritu extrovertido. Mi capacidad organizativa, liderazgo y habilidades en negociaciones y trabajo en equipo respaldan mi compromiso con la excelencia y el crecimiento continuo.</p>
        </div>
      </section>
    </>
  )
}

export default SobreNosotros