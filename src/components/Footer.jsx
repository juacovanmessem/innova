import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Footer() {
  const email = 'info.innova.asistenciapo@gmail.com';
  const MySwal = withReactContent(Swal);

  const copiarEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        MySwal.fire({
          icon: 'success',
          title: '¡Correo copiado!',
          text: 'El correo fue copiado al portapapeles.',
          timer: 2000,
          showConfirmButton: false,
          background: '#F6F5E8',
          color: '#562689',
        });
      })
      .catch(() => {
        MySwal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo copiar el correo.',
          background: '#F6F5E8',
          color: '#562689',
        });
      });
  };

  return (
    <footer className="ft-footer">

      {/* ── franja superior decorativa ── */}
      <div className="ft-top-bar" />

      <div className="ft-inner">

        {/* columna marca */}
        <div className="ft-brand">
          <p className="ft-brand-name">Nexa</p>
          <p className="ft-brand-sub">Asistencia ejecutiva online</p>
          <p className="ft-tagline">
            Gestión digital con criterio humano.<br />
            Trabajo humanizado, procesos claros, resultados reales.
          </p>
        </div>

        {/* columna contacto */}
        <div className="ft-col">
          <p className="ft-col-title">Contacto</p>

          <a
            href="https://wa.link/64qin1"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            <i className="bi bi-whatsapp ft-link-icon" />
            +54 381 552-5207
          </a>

          <button className="ft-link ft-link-btn" onClick={copiarEmail}>
            <i className="bi bi-envelope-at-fill ft-link-icon" />
            {email}
          </button>
        </div>

        {/* columna redes */}
        <div className="ft-col">
          <p className="ft-col-title">Redes sociales</p>

          <a
            href="https://www.instagram.com/innova.online.nc/"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            <i className="bi bi-instagram ft-link-icon" />
            <span>
              @nexa.online.nc
              <span className="ft-link-badge">Asistencia Ejecutiva</span>
            </span>
          </a>

          <a
            href="https://www.instagram.com/innova.nc/"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            <i className="bi bi-instagram ft-link-icon" />
            <span>
              @nexa.nc
              <span className="ft-link-badge">Centro Médico</span>
            </span>
          </a>
        </div>

      </div>

      {/* ── barra inferior ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © {new Date().getFullYear()} NEXA — Asistencia Ejecutiva Online. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
