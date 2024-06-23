import React from 'react'
import '../styles/SobreNosotros.css'
import bg1 from '../assets/fondo.1.jpg'
import bg2 from '../assets/fondo.2.jpg'


function SobreNosotros() {
  return (
    <>
      <section>
        <div className='container-lg text-center my-2 p-4'>
          <h1 className='headline p-2 palanquin-dark-regular'>QUIENES SOMOS</h1>
          <p className='lead'>Soy Natalia Chiappino, creadora y Directora de INNOVA, con una sólida experiencia respaldada por años de trabajo en centros médicos y como secretaria de gerentes en el sector comercial. Me defino como una persona responsable, cordial y extrovertida, con un espíritu de superación constante que abraza con entusiasmo los desafíos que se presentan.</p> 
          <p className='lead'>Mi trayectoria me ha dotado de una destacada capacidad organizativa, liderazgo, y habilidades tanto para las negociaciones como para trabajar de manera efectiva en equipo. Estoy comprometida con el crecimiento continuo y la excelencia, y asumo cada tarea con dedicación y entusiasmo.</p>
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
      <section className='p-4' style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
        <div className='container-lg text-center bg-faded my-2 p-4'>
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

    </>
  )
}

export default SobreNosotros