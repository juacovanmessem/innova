import React from 'react';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'; 

function Cards({ img, name, lastName, prof, schedule }) {

  function handleClickSchedule(schedule) {
    Swal.fire({
      title: 'Horarios de atención',
      text: schedule,
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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Dr. {lastName}, {name}</Card.Title>
          <Card.Text>
            {prof}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <button onClick={() => handleClickSchedule(schedule)}>Ver horarios de atención</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
