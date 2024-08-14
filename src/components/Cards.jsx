import React from 'react';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'; 
import '../styles/Profesionales.css'



function Cards({ img, name, lastName, prof, schedule, gender, link }) {

  function handleClickSchedule(schedule, link) {
    Swal.fire({
      title: 'Reservar un turno',
      html: `
        <p class='lead'>Horarios de atencion al cliente de 10 a 17 hrs.</p>
        <a href=${link} target='blank' autofocus class='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Reservar ahora</a>

      `,
      color: "#19577A",
      background: "#F6F5E8",
      backdrop: `#1d4355b5`,
      showDenyButton: true,
      showConfirmButton:false,
      denyButtonText: `Cancelar`,
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
      <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img variant="top" src={img} className='profile-pic' />
        <Card.Body>
          <Card.Title> {lastName}, {name}</Card.Title>
          <Card.Text>
            {prof}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <button onClick={() => handleClickSchedule(schedule, link)} className='btn-reserva p-2 text-white rounded-2'>Reservar un turno</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
