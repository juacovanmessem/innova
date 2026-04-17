import Slider from './Slider';
import naty from '../assets/naty.jpg';
import '../styles/SobreNosotros2.css';

export default function SobreNosotros() {
  return (
    <>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className="sn-hero">
        <div className="sn-hero-inner">
          <div className="sn-hero-text anim-left">
            <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>
              Asistencia ejecutiva online
            </span>
            <h1 className="sn-hero-h1">
              Gestión digital<br />
              <em>con criterio humano.</em>
            </h1>
            <p className="sn-hero-sub">
              Dejá de responder mensajes todo el día. Ordená tu atención y recuperá tu tiempo.
              <br /><br />
              Nos encargamos de la gestión de pacientes, turnos y tareas administrativas
              para que el profesional se enfoque en lo importante.
            </p>
          </div>
          <div className="sn-hero-img anim-right anim-d2">
            {/*
              IMAGEN HERO
              Recomendado: foto de consultorio o profesional de salud trabajando
              Tamaño sugerido: 800×600px
            */}
            <img src="" alt="Consultorio profesional" className="sn-img-fill" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          SOBRE NEXA (sin título)
      ══════════════════════════ */}
      <section className="sn-sec sn-quienes">
        <div className="sn-two-col">
          <div className="sn-img-frame anim-left">
            {/*
              IMAGEN EQUIPO
              Recomendado: foto de Natalia o del equipo NEXA
              Tamaño sugerido: 600×800px
            */}
            <img src="" alt="Equipo NEXA" className="sn-img-fill" />
          </div>
          <div className="sn-col-text anim-right anim-d2">
            <span className="section-eyebrow">¿Quiénes somos?</span>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <p className="sn-body">
              En <strong>NEXA</strong> nos especializamos en ofrecer soluciones digitales
              innovadoras y personalizadas para profesionales que buscan optimizar su presencia
              en línea y mejorar la eficiencia en sus tareas diarias.
            </p>
            <p className="sn-body">
              Con un equipo dedicado y apasionado, brindamos una gama completa de servicios
              diseñados para satisfacer las necesidades específicas de cada cliente.{' '}
              <strong>Trabajo humanizado, procesos claros, resultados reales.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PROBLEMA
      ══════════════════════════ */}
      <section className="sn-sec sn-dark">
        <div className="sn-two-col">
          <div className="anim-left">
            <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>
              El problema
            </span>
            <h2 className="sn-h2-light">
              Si sos profesional de la salud, seguramente te pasa:
            </h2>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <ul className="sn-prob-list">
              {[
                'Respondés mensajes a cualquier hora',
                'Tu agenda depende del WhatsApp',
                'Perdés tiempo en tareas administrativas',
                'Sentís que trabajás todo el día pero sin orden',
              ].map((txt, i) => (
                <li key={i} className={`sn-prob-item anim-up anim-d${i + 1}`}>
                  <span className="sn-prob-dot" />
                  <p className="sn-prob-text">{txt}</p>
                </li>
              ))}
            </ul>
            <div className="sn-frase-block anim-up anim-d5">
              <p>El problema no es la cantidad de pacientes. Es la falta de sistema.</p>
            </div>
          </div>
          <div className="sn-img-frame anim-right anim-d2">
            {/*
              IMAGEN PROBLEMA
              Recomendado: foto de profesional saturado / teléfono con muchos mensajes
              Tamaño sugerido: 600×800px
            */}
            <img src="" alt="Profesional saturado" className="sn-img-fill" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          SOLUCIÓN
      ══════════════════════════ */}
      <section className="sn-sec sn-light">
        <div className="sn-two-col">
          <div className="sn-img-frame anim-left">
            {/*
              IMAGEN SOLUCIÓN
              Recomendado: foto de asistente trabajando / equipo organizado
              Tamaño sugerido: 600×800px
            */}
            <img src="" alt="Equipo organizado NEXA" className="sn-img-fill" />
          </div>
          <div className="anim-right anim-d2">
            <span className="section-eyebrow">La solución</span>
            <h2 className="sn-h2-dark">
              En NEXA organizamos la atención de forma profesional.
            </h2>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <div className="sn-sol-grid">
              {[
                'Atención de pacientes por WhatsApp',
                'Gestión de turnos y agenda',
                'Seguimiento y recordatorios',
                'Tareas administrativas',
                'Soporte en comunicación digital',
              ].map((txt, i) => (
                <div key={i} className={`sn-sol-item anim-scale anim-d${i + 1} ${i === 4 ? 'sn-sol-full' : ''}`}>
                  <span className="sn-sol-dot" />
                  <p className="sn-sol-text">{txt}</p>
                </div>
              ))}
            </div>
            <p className="sn-sol-footer">
              Trabajamos con protocolos claros, atención humana y procesos definidos.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          BENEFICIOS
      ══════════════════════════ */}
      <section className="sn-sec sn-dark">
        <div className="sn-center-content">
          <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>
            Por qué elegirnos
          </span>
          <h2 className="sn-h2-light">Beneficios de trabajar con NEXA</h2>
          <div className="sn-bar sn-bar-c" />
          <div className="sn-ben-grid">
            {[
              { label: 'Recupero de tiempo' },
              { label: 'Atención ordenada' },
              { label: 'Menos interrupciones' },
              { label: 'Mejor experiencia del paciente' },
              { label: 'Escalabilidad del servicio' },
            ].map((b, i) => (
              <div key={i} className={`sn-ben-card anim-up anim-d${i + 1}`}>
                <div className="sn-ben-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#40dfd0" strokeWidth="1.3" />
                    <path d="M6 9l2 2 4-4" stroke="#40dfd0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="sn-ben-text">{b.label}</p>
              </div>
            ))}
          </div>
          <p className="sn-ben-frase">Pasás de apagar incendios a gestionar con criterio.</p>
        </div>
      </section>

      {/* ══════════════════════════
          PÚBLICO OBJETIVO
      ══════════════════════════ */}
      <section className="sn-sec sn-light">
        <div className="sn-center-content">
          <span className="section-eyebrow">¿Para quién es NEXA?</span>
          <h1 className="sn-h1-pub headline p-2 palanquin-dark-regular">
            Pensado para profesionales<br />de la salud
          </h1>
          <div className="sn-bar sn-bar-c" />
          <p className="sn-body sn-body-center" style={{ marginTop: 16 }}>
            Nuestro foco está en médicos y especialistas del área de la salud,
            quienes enfrentan una carga administrativa especialmente alta.
          </p>
          <div className="sn-pub-grid">
            {[
              { tipo: 'si', titulo: 'Médicos y especialistas',      desc: 'Clínicos, especialistas y profesionales de consultorio que necesitan gestión de turnos, comunicación con pacientes y administración sin distraerse de la atención médica.' },
              { tipo: 'si', titulo: 'Odontólogos y psicólogos',     desc: 'Profesionales de la salud con consultorios privados que requieren orden administrativo, presencia digital y atención al paciente fuera del horario de consulta.' },
              { tipo: 'si', titulo: 'Centros médicos',              desc: 'Instituciones que necesitan estandarizar procesos de atención, comunicación y gestión administrativa sin sumar estructura fija.' },
              { tipo: 'no', titulo: 'No es para vos si...',         desc: 'Solo buscás a alguien que responda mensajes. NEXA es sistema + equipo, no solo cobertura de inbox.' },
            ].map((c, i) => (
              <div key={i} className={`sn-pub-card sn-pub-card--${c.tipo} anim-up anim-d${i + 1}`}>
                <div className="sn-pub-head">
                  <span className={`sn-pub-pip sn-pub-pip--${c.tipo}`} />
                  <p className={`sn-pub-title sn-pub-title--${c.tipo}`}>{c.titulo}</p>
                </div>
                <p className="pub-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="pub-nota">● púrpura: público principal &nbsp;|&nbsp; ● azul: no aplica</p>
        </div>
      </section>

      {/* ══════════════════════════
          DIFERENCIAL
      ══════════════════════════ */}
      <section className="sn-sec sn-terc">
        <div className="sn-two-col">
          <div className="anim-left">
            <span className="section-eyebrow" style={{ color: 'rgba(246,245,232,.7)' }}>
              ¿Por qué NEXA?
            </span>
            <h2 className="sn-h2-light">Lo que nos hace diferentes</h2>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <ul className="sn-dif-list">
              {[
                { titulo: 'Atención humana',            desc: 'no bots, no respuestas automáticas vacías' },
                { titulo: 'Experiencia en salud',       desc: 'entendemos el contexto del consultorio' },
                { titulo: 'Protocolos estructurados',   desc: 'procesos claros y replicables' },
                { titulo: 'Acompañamiento estratégico', desc: 'no solo ejecutamos, pensamos con vos' },
              ].map((d, i) => (
                <li key={i} className={`sn-dif-item anim-up anim-d${i + 1}`}>
                  <div className="sn-dif-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3 3 7-7" stroke="#F6F5E8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="sn-dif-text">
                    <strong style={{ color: '#F6F5E8' }}>{d.titulo}</strong> — {d.desc}
                  </p>
                </li>
              ))}
            </ul>
            <div className="sn-dif-frase anim-up anim-d5">
              "No somos asistentes. Somos sistema + equipo."
            </div>
          </div>
          <div className="sn-img-frame anim-right anim-d2">
            {/*
              IMAGEN DIFERENCIAL
              Recomendado: foto del equipo NEXA trabajando / reunión
              Tamaño sugerido: 600×600px
            */}
            <img src="" alt="Equipo NEXA" className="sn-img-fill" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          ANTES / DESPUÉS
      ══════════════════════════ */}
      <section className="sn-sec sn-light">
        <div className="sn-center-content">
          <span className="section-eyebrow">El cambio que genera NEXA</span>
          <h2 className="sn-h2-dark">Antes y después de trabajar con nosotros</h2>
          <div className="sn-bar sn-bar-l sn-bar-mb" />
          <div className="sn-ad-grid anim-up anim-d2">
            <div className="sn-ad-col sn-ad-antes">
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
            <div className="sn-ad-col sn-ad-despues">
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

      {/* ══════════════════════════
          SEPARADOR
      ══════════════════════════ */}
      <div className="sec-separador">
        <div className="sep-line" />
        <div className="sep-dot" />
        <div className="sep-dot" style={{ opacity: .4 }} />
        <div className="sep-dot" style={{ opacity: .2 }} />
        <div className="sep-line" />
      </div>

      {/* ══════════════════════════
          MISIÓN / VISIÓN
      ══════════════════════════ */}
      <section className="row g-0">
        <div className="bg-1 col-12 col-md-6 p-4 p-md-5 anim-left">
          <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>Nuestra misión</span>
          <h2 className="palanquin-dark-regular mt-1 mb-3" style={{ color: '#F6F5E8' }}>
            Lo que nos mueve cada día
          </h2>
          <p className="lead mv-quote">
            "Brindar soluciones digitales innovadoras y personalizadas a profesionales,
            optimizando su presencia en línea y permitiéndoles centrarse en su área de especialización."
          </p>
        </div>
        <div className="bg-3 col-12 col-md-6 p-4 p-md-5 anim-right">
          <span className="section-eyebrow" style={{ color: 'rgba(86,38,137,.75)' }}>Nuestra visión</span>
          <h2 className="palanquin-dark-regular mt-1 mb-3" style={{ color: '#1a1a2e' }}>
            Hacia dónde vamos
          </h2>
          <p className="lead mv-quote mv-quote--dark">
            "Convertirnos en líderes reconocidos en el campo de la asistencia digital,
            siendo el socio preferido para profesionales en la gestión de su presencia en línea."
          </p>
        </div>
      </section>

      {/* ══════════════════════════
          NUESTROS CLIENTES
      ══════════════════════════ */}
      <section>
        <div className="container-lg text-center my-2 p-4">
          <h1 className="headline p-2 palanquin-dark-regular anim-up">Nuestros Clientes</h1>
          <p className="lead">
            Nos enorgullece haber trabajado con reconocidos clientes tanto provinciales como
            nacionales, brindando siempre un servicio de alta calidad y confianza.
          </p>
        </div>
        <div className="container-md mb-3">
          <Slider />
        </div>
      </section>

      {/* ══════════════════════════
          TRABAJO EN EQUIPO
      ══════════════════════════ */}
      <section className="p-4">
        <div className="container-lg text-center bg-faded my-2 p-4 show">
          <h1 className="headline palanquin-dark-regular">Trabajo en equipo</h1>
          <p className="lead">
            En NEXA creemos en la fuerza del trabajo colaborativo y diverso. Detrás de cada servicio
            personalizado y solución eficiente, hay un equipo comprometido que trabaja en conjunto
            para llevar a cabo nuestra visión. Mantenemos canales de comunicación abiertos,
            fomentando un ambiente donde las ideas son valoradas y las preocupaciones son abordadas.
          </p>
          <p className="lead">
            La retroalimentación constante es fundamental. Escuchamos activamente a nuestro equipo,
            creando un entorno donde las opiniones son respetadas. Esta cultura nos permite adaptarnos
            y evolucionar como un equipo sólido. En NEXA, el éxito surge de personas comprometidas
            que trabajan en armonía hacia metas comunes.
          </p>
        </div>
      </section>

      {/* ══════════════════════════
          FUNDADORA
      ══════════════════════════ */}
      <section className="sn-naty anim-up">
        <div className="sn-naty-wrap">
          <div className="sn-naty-avatar">
            <img src={naty} alt="Natalia Chiappino" className="sn-img-fill" />
          </div>
          <div className="sn-naty-info">
            <p className="sn-naty-name">Natalia Chiappino</p>
            <p className="sn-naty-role">Creadora y Directora de NEXA</p>
            <p className="sn-naty-quote">
              Con una sólida trayectoria en centros médicos y el sector comercial, me destaco por mi
              responsabilidad, cordialidad y espíritu extrovertido. Mi capacidad organizativa,
              liderazgo y habilidades en negociaciones y trabajo en equipo respaldan mi compromiso
              con la excelencia y el crecimiento continuo.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
