
import './App.css'
import { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from './assets/logo.jpg'
import Servicios from './components/Servicios';
import Profesionales from './components/Profesionales';
import Formulario from './components/Formulario';
import SobreNosotros from './components/SobreNosotros2';
import Contacto from './components/Contacto';
import WP from './components/WP';


function App() {
  const [activeComponent, setActiveComponent] = useState(<SobreNosotros />);
  const [activeBtn, setActiveBtn] = useState(0);

  const navItems = [
    { label: "Inicio",            comp: <SobreNosotros /> },
    { label: "Servicios",         comp: <Servicios /> },
    { label: "Nuestros Clientes", comp: <Profesionales /> },
    { label: "Contacto",          comp: <Formulario /> },
  ];

  const handleClick = (comp, index) => {
    setActiveComponent(comp);
    setActiveBtn(index);
  };

  return (
    <>
      <section className="justify-content-center d-flex row g-0 pb-2 menu">
        <div className="col-12 text-center">
          <img src={logo} alt="NEXA" className="logo" />
        </div>
        <div className="col-12 text-center menu-brand">
          <p className="brand-name">Nexa</p>
          <p className="brand-sub">Gestión digital con criterio humano</p>
          <div className="brand-divider" />
        </div>
      </section>
      <div className="menu pt-3 sticky-top">
        <nav>
          <Navbar expand="md" className="d-flex justify-content-evenly menu1 px-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custome-toggler">
              <span className="menu mb-2">Menú</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="text-center">
              <Nav className="me-auto w-100 d-flex justify-content-around flex-wrap">
                {navItems.map((item, i) => (
                  <button
                    key={i}
                    className={`btn-menu ${activeBtn === i ? "btn-menu--active" : ""}`}
                    onClick={() => handleClick(item.comp, i)}
                  >
                    {item.label}
                  </button>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>

      <div>
        {activeComponent}
        <Contacto />
      </div>

      <div className="fixed-bottom-right">
        <WP />
      </div>
    </>
  );
}

export default App
