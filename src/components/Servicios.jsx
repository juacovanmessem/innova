import React from 'react'
import '../styles/Serivicos.css'
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
          <button className='rounded col-11 col-md-5 col-lg-2 bgr-2 mb-2 lead' onClick={() => handleClickAlert('Atencion al cliente en WhatsApp y redes sociales:','Ofrecemos una atención personalizada excepcional ne cada mensaje. Gestionamos las interacciones brindando privacidad, empatía y cercanía con cada paciente. En INNOVA, cada mensaje es una oportunindad para construir relaciones sólidas')}>
            <i className="bi bi-chat-right-text-fill display-1"></i>
            <p className='lead'>
              Atención al Cliente
            </p>
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bgr-2 mb-2 lead' onClick={() => handleClickAlert('Secretaría Administrativa / Ejecutiva:','Libera tu tiempo de las tareas administrativas que consumen energía. Nos encargamos de la gestión eficiente de tu agendad, correos electrónicos y otras responsabilidades administrativas para que puedas enfocarte plenamente en tu tarea principal: la atención de tus pacientes.')}>
            <i className="bi bi-calendar-check display-1"></i>
            <p>
              Secretaria Administrativa y Ejecutiva
            </p>
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bgr-2 mb-2 lead' onClick={() => handleClickAlert('Community Manager:','Potenciamos tu presencia en redes sociales. Desde análisis de cuentas hasta estrategias de publicaciones, diseño, copy y respuestas en inbox, nuestro equipo de Social y Community Managers está dedicado a hacer brillar tu marca personal. Construimos conexiones significativas en el mundo digital.')}>
          <i className="bi bi-people display-1"></i>
          <p>
            Community Manager
          </p>
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bgr-2 mb-2 lead' onClick={() => handleClickAlert('Asistencia en herramientas digitales:','Nos mantenemos a la vanguardia de la digitalización. Ofrecemos asistencia en plataformas y herramientas digitales.')}>
            <i className="bi bi-pc-display display-1"></i>
            <p>
              Asistencia con herramientas y plataformas digitales
            </p>
          </button>
          <button className='rounded col-11 col-md-5 col-lg-2 bgr-2 mb-2 lead' onClick={() => handleClickAlert('Desarrollo Web','Impulsa tu negocio con un sitio web profesional y atractivo. Ofrecemos soluciones personalizadas que destacan tu marca y mejoran la experiencia del usuario. ¡Lleva tu presencia online al siguiente nivel!')}>
            <i className="bi bi bi-browser-edge display-1"></i>
            <p>
              Desarrollo Web
            </p>
          </button>
        </div>
      </section>
      
      {/* ══ BENEFICIOS — NO TOCAR ══ */}
      <section className="sn-ben">
        <div className="sn-ben-inner">
          <span className="section-eyebrow sdr-up" style={{ color: 'rgba(64,223,208,.75)' }}>
            Por qué elegirnos
          </span>
          <h2 className="sdr-up" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', fontWeight: 700, color: '#F6F5E8', marginBottom: 0 }}>
            Beneficios de trabajar con NEXA
          </h2>
          <div className="sn-bar sn-bar-c sdr-scale" />
          <div className="sn-ben-grid">
            {[
              'Recupero de tiempo',
              'Atención ordenada',
              'Menos interrupciones',
              'Mejor experiencia del paciente',
              'Escalabilidad del servicio',
            ].map((txt, i) => (
              <div key={i} className="sn-ben-card sdr-scale">
                <div className="sn-ben-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#40dfd0" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#40dfd0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="sn-ben-text">{txt}</p>
              </div>
            ))}
          </div>
          <p className="sn-ben-frase sdr-up">
            Pasás de apagar incendios a gestionar con criterio.
          </p>
        </div>
      </section>

      {/* ══ ANTES / DESPUÉS — crema ══ */}
      <section className="sn-ad">
        <div className="sn-ad-inner">
          <span className="section-eyebrow sdr-up">El cambio que genera NEXA</span>
          <h2 className="sn-ad-h2 sdr-up">Antes y después de trabajar con nosotros</h2>
          <div className="sn-bar sn-bar-l sdr-scale" />
          <div className="sn-ad-grid sdr-fade">
            <div className="sn-ad-antes">
              <p className="sn-ad-label sn-ad-label--a">
                <span className="sn-ad-dot sn-ad-dot--a" /> Sin NEXA
              </p>
              {['WhatsApp desbordado a toda hora', 'Turnos desordenados y sin sistema', 'Falta de seguimiento a pacientes', 'Estrés y sensación de descontrol'].map((t, i) => (
                <div key={i} className="sn-ad-item">
                  <svg className="sn-ad-ico" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#b0b0c8" strokeWidth="1.3" />
                    <path d="M7 10h6" stroke="#b0b0c8" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  <p className="sn-ad-text sn-ad-text--a">{t}</p>
                </div>
              ))}
            </div>
            <div className="sn-ad-despues">
              <p className="sn-ad-label sn-ad-label--d">
                <span className="sn-ad-dot sn-ad-dot--d" /> Con NEXA
              </p>
              {['Agenda organizada y con criterio', 'Pacientes bien atendidos y seguidos', 'Procesos claros y replicables', 'Más tiempo para enfocarte en lo tuyo'].map((t, i) => (
                <div key={i} className="sn-ad-item">
                  <svg className="sn-ad-ico" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#40dfd0" strokeWidth="1.3" />
                    <path d="M6 10l3 3 5-5" stroke="#40dfd0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="sn-ad-text sn-ad-text--d">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ══ SEPARADOR ══ */}
      <div className="sec-separador">
        <div className="sep-line" />
        <div className="sep-dot" />
        <div className="sep-dot" style={{ opacity: .4 }} />
        <div className="sep-dot" style={{ opacity: .2 }} />
        <div className="sep-line" />
      </div>
    </>
  )
}

export default Servicios