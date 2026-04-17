import React from 'react'
import Slider from "./Slider";
import naty from '../assets/naty.jpg';


function SobreNosotros() {

  return (
    <>
      {/* ── 1. PRESENTACIÓN ── */}
      <section>
        <div className="container-lg text-center my-2 p-4 pt-5">
          <span className="section-eyebrow">¿Quiénes somos?</span>
          <h1 className="headline p-2 palanquin-dark-regular mt-2">
            Asistencia ejecutiva online con sello humano
          </h1>
          <p className="lead">
            En <strong>NEXA</strong> nos especializamos en ofrecer soluciones digitales innovadoras
            y personalizadas para profesionales que buscan optimizar su presencia en línea y mejorar
            la eficiencia en sus tareas diarias. Con un equipo dedicado y apasionado, brindamos una
            gama completa de servicios diseñados para satisfacer las necesidades específicas de cada cliente.
          </p>
        </div>
      </section>

      {/* ── 2. PROBLEMA / SOLUCIÓN ── */}
      <section className="row g-0">
        <div className="bg-1 col-12 col-md-6 p-4 p-md-5">
          <div className="ps-icon-wrap mb-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#40dfd0" strokeWidth="1.5"/>
              <path d="M10 6v5M10 13v1" stroke="#40dfd0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>El problema</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#F6F5E8' }}>
            Tu tiempo se va en tareas que otros pueden resolver
          </h1>
          <p className="lead" style={{ color: 'rgba(246,245,232,.85)' }}>
            Gestionar correos, organizar agendas, coordinar reuniones y mantener presencia digital
            consume horas valiosas que deberían estar dedicadas a tu actividad principal.
            El costo de hacerlo solo es invisible pero real.
          </p>
        </div>
        <div className="bg-3 col-12 col-md-6 p-4 p-md-5">
          <div className="ps-icon-wrap mb-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4 4 8-8" stroke="#F6F5E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="section-eyebrow" style={{ color: 'rgba(246,245,232,.7)' }}>La solución</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#F6F5E8' }}>
            Un equipo humano que trabaja como parte del tuyo
          </h1>
          <p className="lead" style={{ color: 'rgba(246,245,232,.85)' }}>
            En NEXA tomamos esas tareas y las ejecutamos con precisión, calidez y compromiso.
            No somos un bot ni un servicio genérico: somos profesionales que se adaptan a tu
            forma de trabajar para que vos te enfoques en lo que realmente importa.
          </p>
        </div>
      </section>
      {/* ── SEPARADOR ── */}
      <div className="sec-separador">
        <div className="sep-line" />
        <div className="sep-dot" />
        <div className="sep-dot" style={{ opacity: .4 }} />
        <div className="sep-dot" style={{ opacity: .2 }} />
        <div className="sep-line" />
      </div>

      {/* ── 3. MISIÓN / VISIÓN ── */}
      <section className="row g-0">
        <div className="bg-1 col-12 col-md-6 p-4 p-md-5">
          <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>Nuestra misión</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#F6F5E8' }}>Lo que nos mueve cada día</h1>
          <p className="lead mv-quote">
            "Brindar soluciones digitales innovadoras y personalizadas a profesionales, optimizando
            su presencia en línea y permitiéndoles centrarse en su área de especialización."
          </p>
        </div>
        <div className="bg-3 col-12 col-md-6 p-4 p-md-5">
          <span className="section-eyebrow" style={{ color: 'rgba(86,38,137,.75)' }}>Nuestra visión</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#1a1a2e' }}>Hacia dónde vamos</h1>
          <p className="lead mv-quote mv-quote--dark">
            "Convertirnos en líderes reconocidos en el campo de la asistencia digital, siendo
            el socio preferido para profesionales en la gestión de su presencia en línea."
          </p>
        </div>
      </section>

      {/* ── 4. PÚBLICO OBJETIVO ── */}
      <section>
        <div className="container-lg my-2 p-4 pt-5">
          <span className="section-eyebrow">¿Para quién es NEXA?</span>
          <h1 className="headline p-2 palanquin-dark-regular mt-2 text-center">
            Pensado para profesionales de la salud y el conocimiento
          </h1>
          <p className="lead text-center mb-4">
            Nuestro enfoque principal está en médicos y especialistas del área de la salud,
            quienes enfrentan una carga administrativa especialmente alta. También acompañamos
            a otros profesionales que necesitan liberar su tiempo para enfocarse en lo que
            mejor saben hacer.
          </p>
          <div className="pub-cards-grid">
            {/* Público principal */}
            <div className="pub-card pub-card--primary show2">
              <div className="pub-card-header">
                <div className="pub-card-pip pub-card-pip--primary" />
                <p className="pub-card-title">Médicos y especialistas</p>
              </div>
              <p className="pub-card-desc">Clínicos, especialistas y profesionales de consultorio que necesitan gestión de turnos, comunicación con pacientes y administración sin distraerse de la atención médica.</p>
            </div>
            <div className="pub-card pub-card--primary show2">
              <div className="pub-card-header">
                <div className="pub-card-pip pub-card-pip--primary" />
                <p className="pub-card-title">Odontólogos y psicólogos</p>
              </div>
              <p className="pub-card-desc">Profesionales de la salud con consultorios privados que requieren orden administrativo, presencia digital y atención al paciente fuera del horario de consulta.</p>
            </div>
            {/* Público secundario */}
            <div className="pub-card pub-card--secondary show2">
              <div className="pub-card-header">
                <div className="pub-card-pip pub-card-pip--secondary" />
                <p className="pub-card-title pub-card-title--secondary">Otros profesionales independientes</p>
              </div>
              <p className="pub-card-desc">Abogados, contadores, consultores y especialistas de otras áreas que comparten la misma necesidad: delegar la gestión para crecer con foco.</p>
            </div>
            <div className="pub-card pub-card--secondary show2">
              <div className="pub-card-header">
                <div className="pub-card-pip pub-card-pip--secondary" />
                <p className="pub-card-title pub-card-title--secondary">Emprendedores y PyMEs</p>
              </div>
              <p className="pub-card-desc">Fundadores y equipos pequeños que buscan eficiencia operativa sin sumar estructura fija.</p>
            </div>
          </div>
          <p className="pub-nota">● púrpura: público principal &nbsp;|&nbsp; ● azul: también trabajamos con ellos</p>
        </div>
      </section>

      {/* ── 5. NUESTROS CLIENTES ── */}
      <section>
        <div className="container-lg text-center my-2 p-4">
          <h1 className="headline p-2 palanquin-dark-regular">Nuestros Clientes</h1>
          <p className="lead">
            Nos enorgullece haber trabajado con reconocidos clientes tanto provinciales como
            nacionales, brindando siempre un servicio de alta calidad y confianza.
          </p>
        </div>
        <div className="container-md mb-3">
          <Slider />
        </div>
      </section>

      {/* ── 6. TRABAJO EN EQUIPO ── */}
      <section className="p-4 bg-faded-section">
        <div className="container-lg text-center bg-faded my-2 p-4 show">
          <h1 className="headline palanquin-dark-regular">Trabajo en equipo</h1>
          <p className="lead">
            En NEXA creemos en la fuerza del trabajo colaborativo y diverso. Detrás de cada servicio
            personalizado y solución eficiente, hay un equipo comprometido que trabaja en conjunto
            para llevar a cabo nuestra visión. Como líder y guía, acompañamos al equipo en su
            desarrollo, manteniendo canales de comunicación abiertos y fomentando un ambiente donde
            las ideas son valoradas y las preocupaciones son abordadas.
          </p>
          <p className="lead">
            La retroalimentación constante es fundamental. Escuchamos activamente a nuestro equipo,
            creando un entorno donde las opiniones son respetadas. Esta cultura nos permite adaptarnos
            y evolucionar, no solo como individuos, sino como un equipo sólido. En NEXA, el éxito surge
            de personas comprometidas que trabajan en armonía hacia metas comunes. Juntos, no solo
            ofrecemos servicios excepcionales, sino que también construimos un entorno que inspira el
            crecimiento continuo.
          </p>
        </div>
      </section>

      {/* ── 7. FUNDADORA ── */}
      <section>
        <div className="p-3 text-center">
          <img src={naty} alt="Natalia Chiappino" className="img-fluid rounded-circle img-face blue-shadow show" />
          <p className="fw-semibold mt-3 mb-1" style={{ color: 'var(--colorPrincipal)' }}>Natalia Chiappino</p>
          <p className="text-muted small mb-2" style={{ letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Creadora y Directora de NEXA
          </p>
          <p className="lead border-4 border-end border-start rounded-3 p-2 show">
            Con una sólida trayectoria en centros médicos y el sector comercial, me destaco por mi
            responsabilidad, cordialidad y espíritu extrovertido. Mi capacidad organizativa, liderazgo
            y habilidades en negociaciones y trabajo en equipo respaldan mi compromiso con la excelencia
            y el crecimiento continuo.
          </p>
        </div>
      </section>
    </>
  );
}

export default SobreNosotros