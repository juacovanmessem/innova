
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
import WP from './components/WP';


function App() {

  const [buttonsDisabled, setButtonsDisabled] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const [activeClass, setActiveClass] = useState({
    div1: 'd-none',
    div2: 'd-none',
    div3: 'd-none',
    menu1: 'active',
    menu2: 'd-none',
    menu3: 'd-none'
  });

  const [activeComponent, setActiveComponent] = useState(<SobreNosotros />);

  const handleClick = (button, component, div, menu) => {
    const newButtonsState = {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
    };

    newButtonsState[button] = true;
    setButtonsDisabled(newButtonsState);
    setActiveComponent(component);

    const newClassState = {
      div1: 'd-none',
      div2: 'd-none',
      div3: 'd-none',
      menu1: 'd-none',
      menu2: 'd-none',
      menu3: 'd-none'
    };

    if (div, menu) {
      newClassState[div] = 'headline text-center lead display-6';
      newClassState[menu] = 'active';

    }

    setActiveClass(newClassState);
  };

  return (
    <>
      <div className='menu pt-3'>
        <section className='justify-content-center d-flex row g-0'>
          <div className='col-12 text-center'>
            <img src={logo} alt="INNOVA" className='logo'/>
          </div>
          <div className='col-12'>
            <p className={activeClass.div1}>Asistencia ejecutiva online</p>
            <p className={activeClass.div2}>Centro Medico - Tafi Viejo</p>
            <p className={activeClass.div3}></p>
          </div>
        </section>

        <nav className={activeClass.menu1}>
          <Navbar expand="md" className='d-flex justify-content-evenly menu1'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custome-toggler'>
              <span className='menu mb-2'>Menú</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
              <Nav className="me-auto w-100 d-flex justify-content-around flex-wrap lead">
                <button className="btn-menu" disabled={buttonsDisabled.button1} onClick={() => handleClick('button1', <SobreNosotros />, 'div3','menu1')}> Inicio </button>
                <button className="btn-menu" disabled={buttonsDisabled.button5} onClick={() => handleClick('button5', <Servicios />,'div1','menu2')}> Asistencia Ejecutiva Online </button>
                <button className="btn-menu" disabled={buttonsDisabled.button3} onClick={() => handleClick('button3', <CentroMedico />, 'div2','menu3')}> Centro Médico </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
        <nav className={activeClass.menu2}>
          <Navbar expand="md" className='d-flex justify-content-evenly menu1'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custome-toggler'>
              <span className='menu mb-2'>Menú</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
              <Nav className="me-auto w-100 d-flex justify-content-around flex-wrap lead">
                <button className="btn-menu" disabled={buttonsDisabled.button1} onClick={() => handleClick('button1', <SobreNosotros />, 'div3','menu1')}> Inicio </button>
                <button className="btn-menu" disabled={buttonsDisabled.button5} onClick={() => handleClick('button5', <Servicios />,'div1','menu2')}> Servicios </button>
                <button className="btn-menu" disabled={buttonsDisabled.button2} onClick={() => handleClick('button2', <Profesionales />,'div1','menu2')}> Profesionales </button>
                <button className="btn-menu" disabled={buttonsDisabled.button3} onClick={() => handleClick('button3', <CentroMedico />, 'div2','menu3')}> Centro Médico </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
        <nav className={activeClass.menu3}>
          <Navbar expand="md" className='d-flex justify-content-evenly menu1'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custome-toggler'>
              <span className='menu mb-2'>Menú</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
              <Nav className="me-auto w-100 d-flex justify-content-around flex-wrap lead">
                <button className="btn-menu" disabled={buttonsDisabled.button1} onClick={() => handleClick('button1', <SobreNosotros />, 'div3','menu1')}> Inicio </button>
                <button className="btn-menu" disabled={buttonsDisabled.button5} onClick={() => handleClick('button5', <Servicios />, 'div1','menu2')}> Asistencia ejecutiva online </button>
                <button className="btn-menu" disabled={buttonsDisabled.button3} onClick={() => handleClick('button3', <CentroMedico />, 'div2','menu3')}> Centro Médico </button>
                <button className="btn-menu" disabled={buttonsDisabled.button4} onClick={() => handleClick('button4', <AlquilerConsultorio />, 'div2','menu3')}> Alquilar un consultorio </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>

      <div>
        {activeComponent}
        <Contacto/>
      </div>

      <div className='fixed-bottom-right'>
        <WP/>
      </div>
    </>
  )
}

export default App
