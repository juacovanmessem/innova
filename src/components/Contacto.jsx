import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Contacto() {

  const email = "info.innova.asistenciapo@gmail.com"; 

  const MySwal = withReactContent(Swal);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(email).then(() => {
      MySwal.fire({
        icon: 'success',
        title: '¡Correo copiado!',
        text: 'El correo ha sido copiado al portapapeles.',
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(err => {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo copiar el correo.',
      });
    });
  };

  return (
    <div className='menu'>
      <div className='lead p-4 container-md text-center'>
        <p className=''>Comunicate con nosotros y descubre más sobre nuestros servicios, estaremos atentos para atenderte.</p>
        <div className=''>
          <a href="https://wa.link/64qin1" target="_blank" rel="noopener noreferrer" className='link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'> <i className="bi bi-telephone-inbound-fill"></i> +54 381 552-5207</a>
          
        </div>
        <div className='text-light'>
          <a href="https://www.instagram.com/innova.online.nc/" target="_blank" rel="noopener noreferrer" className='link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><i className="bi bi-instagram"> innova.online.nc</i></a>
          <span> (Asistencia Ejecutiva Online) </span>
        </div>
        <div className='text-light'>
          <a href="https://www.instagram.com/innova.nc/" target="_blank" rel="noopener noreferrer" className='link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><i className="bi bi-instagram"> innova.nc</i></a>
          <span> (Centro Médico) </span>
        </div>
        <div className=''>
          <a onClick={copiarAlPortapapeles} className='link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'  style={{
            background: 'none',
            border: 'none',
            padding: '0',
            cursor: 'pointer',
          }}><i className="bi bi-envelope-at-fill link-light"> info.innova.asistenciapo@gmail.com</i></a>
        </div>
      </div>
    </div>
  )
}

export default Contacto