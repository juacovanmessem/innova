
import './App.css'
import { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from './assets/logo.jpg'
import Servicios from './components/Servicios';
import Profesionales from './components/Profesionales';
import CentroMedico from './components/CentroMedico';
import AlquilerConsultorio from './components/AlquilerConsultorio';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/Contacto';


function App() {

  const [buttonsDisabled, setButtonsDisabled] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
    button5: false
  });

  const [activeComponent, setActiveComponent] = useState(<SobreNosotros/>);
  // Función para manejar el cambio de estado de los botones
  const handleClick = (button, component,) => {
    const newState = {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false
    };

    newState[button] = true;
    setButtonsDisabled(newState);
    setActiveComponent(component);
  };

  return (
    <>
      <div className='menu pt-3'>
        <section className='justify-content-center d-flex'>
          <img src={logo} alt="INNOVA" className='logo'/>
        </section>

        <nav>
          <Navbar expand="md" className='d-flex justify-content-evenly menu'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custome-toggler'>
              <span className='menu mb-2'>Menú</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
              <Nav className="me-auto w-100 d-flex justify-content-around flex-wrap lead">
                <button className="btn-menu" disabled={buttonsDisabled.button1} onClick={() => handleClick('button1', <SobreNosotros />)}> Inicio </button>
                <button className="btn-menu" disabled={buttonsDisabled.button5} onClick={() => handleClick('button5', <Servicios />)}> Servicios </button>
                <button className="btn-menu" disabled={buttonsDisabled.button2} onClick={() => handleClick('button2', <Profesionales />)}> Profesionales </button>
                <button className="btn-menu" disabled={buttonsDisabled.button3} onClick={() => handleClick('button3', <CentroMedico />)}> Centro Médico </button>
                <button className="btn-menu" disabled={buttonsDisabled.button4} onClick={() => handleClick('button4', <AlquilerConsultorio />)}> Alquilar un consultorio </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>

      <div>
        {activeComponent}
        <Contacto/>
      </div>
    </>
  )
}

export default App
