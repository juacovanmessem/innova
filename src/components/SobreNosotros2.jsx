import Slider from './Slider';
import naty from '../assets/naty.jpg';
import '../styles/SobreNosotros2.css';

export default function SobreNosotros() {
  return (
    <>

      {/* ══ 1. HERO  Y PROBLEMA — CREMITA ══ */}
      <section className="sn-hero">
        <div className="sn-hero-inner sdr-up">
          <span className="section-eyebrow">Asistencia ejecutiva online</span>
          <div className="sn-bar sn-bar-c sn-bar-mb" />
          <h1 className="sn-hero-h1">
            Gestión digital <em>con criterio humano.</em>
          </h1>
        </div>
        <div className="sn-prob-inner">
          <h2 className="sdr-up" style={{ fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 700, marginBottom: 0 }}>
            Si sos profesional de la salud, seguramente te pasa:
          </h2>
          <div className="sn-bar sn-bar-c sdr-scale" style={{ marginTop: 12 }} />
          <ul className="sn-prob-list">
            {[
              'Respondés mensajes a cualquier hora',
              'Tu agenda depende del WhatsApp',
              'Perdés tiempo en tareas administrativas',
              'Sentís que trabajás todo el día pero sin orden',
            ].map((txt, i) => (
              <li key={i} className="sn-prob-item sdr-scale">
                <span className="sn-prob-dot" />
                <p className="sn-prob-text">{txt}</p>
              </li>
            ))}
          </ul>
          <div className="sn-frase-block sdr-up">
            <p>El problema no es la cantidad de pacientes. Es la falta de sistema.</p>
          </div>
        </div>
      </section>
      {/* ══ SOLUCIÓN — PRIMARIO ══ */}
      <section className="sn-sol">
        <div className="sn-sol-inner">
          <div className="sdr-up">
            <span className="section-eyebrow">La solución</span>
            <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 700, color: 'var(--colorPrincipal)', marginBottom: 0 }}>
              En NEXA organizamos la atención de forma profesional.
            </h2>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <div className="sn-sol-grid">
              {[
                'Atención de pacientes por WhatsApp',
                'Gestión de turnos y agenda',
                'Seguimiento y recordatorios',
                'Tareas administrativas',
              ].map((txt, i) => (
                <div key={i} className="sn-sol-item sdr-scale">
                  <span className="sn-sol-dot" />
                  <p className="sn-sol-text">{txt}</p>
                </div>
              ))}
              <div className="sn-sol-item sn-sol-full sdr-scale">
                <span className="sn-sol-dot" />
                <p className="sn-sol-text">Soporte en comunicación digital</p>
              </div>
            </div>
            <p className="sn-sol-footer">
              Trabajamos con protocolos claros, atención humana y procesos definidos.
            </p>
          </div>
          <div className="sn-sol-img sdr-fade">
            {/*
              IMAGEN SOLUCIÓN — vertical
              Tamaño sugerido: 600×800px
              Foto: asistente trabajando, equipo organizado
            */}
            <img src="" alt="Equipo NEXA trabajando" className="sn-img-fill" />
          </div>
        </div>
      </section>

      {/* ══ PÚBLICO — CREMITA ══ */}
      <section className="sn-pub">
        <div className="sn-pub-inner">
          <div className="sdr-up">
            <span className="sn-pub-eyebrow">¿Para quién es NEXA?</span>
            <h1 className="sn-pub-h1">
              Pensado para<br />
              <span>profesionales de la salud</span>
            </h1>
            <p className="sn-pub-sub">
              Nuestro foco está en médicos y especialistas del área de la salud,
              quienes enfrentan una carga administrativa especialmente alta.
            </p>
          </div>
          <div className="sn-pub-grid">
            {[
              { tipo: 'si', titulo: 'Médicos y especialistas',  desc: 'Clínicos y profesionales de consultorio que necesitan gestión de turnos y administración sin distraerse de la atención médica.' },
              { tipo: 'si', titulo: 'Odontólogos y psicólogos', desc: 'Profesionales con consultorios privados que requieren orden administrativo y presencia digital.' },
              { tipo: 'si', titulo: 'Centros médicos',          desc: 'Instituciones que necesitan estandarizar procesos de atención sin sumar estructura fija.' },
              { tipo: 'no', titulo: 'No es para vos si...',     desc: 'Solo buscás a alguien que responda mensajes. NEXA es sistema + equipo, no solo cobertura de inbox.' },
            ].map((c, i) => (
              <div key={i} className={`sn-pub-card sn-pub-card--${c.tipo} sdr-scale`}>
                <div className="sn-pub-head">
                  <span className={`sn-pub-pip sn-pub-pip--${c.tipo}`} />
                  <p className={`sn-pub-title ${c.tipo === 'no' ? 'sn-pub-title--no' : ''}`}>{c.titulo}</p>
                </div>
                <p className={`sn-pub-desc ${c.tipo === 'no' ? 'sn-pub-desc--no' : ''}`}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="sn-pub-img-wide sdr-fade">
            {/*
              IMAGEN PÚBLICA — panorámica
              Tamaño sugerido: 1200×450px
              Foto: consultorio, sala de espera, equipo médico
            */}
            <img src="" alt="Profesionales de la salud" />
          </div>
          <p className="pub-nota" style={{ color: 'rgba(246,245,232,.35)' }}>
            ● teal: público principal &nbsp;|&nbsp; ● gris: no aplica
          </p>
        </div>
      </section>

      {/* ══ DIFERENCIAL — PRIMARIO ══ */}
      <section className="sn-dif">
        <div className="sn-dif-inner">
          <div className="sn-dif-img sdr-fade">
            {/*
              IMAGEN DIFERENCIAL — cuadrada
              Tamaño sugerido: 600×600px
              Foto: equipo NEXA trabajando
            */}
            <img src="" alt="Equipo NEXA" className="sn-img-fill" />
          </div>
          <div className="sdr-up">
            <span className="section-eyebrow" style={{ color: 'rgba(246,245,232,.7)' }}>
              ¿Por qué NEXA?
            </span>
            <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 700, color: '#F6F5E8', marginBottom: 0 }}>
              Lo que nos hace diferentes
            </h2>
            <div className="sn-bar sn-bar-l sn-bar-mb" />
            <ul className="sn-dif-list">
              {[
                { t: 'Atención humana',            d: 'no bots, no respuestas automáticas vacías' },
                { t: 'Experiencia en salud',       d: 'entendemos el contexto del consultorio' },
                { t: 'Protocolos estructurados',   d: 'procesos claros y replicables' },
                { t: 'Acompañamiento estratégico', d: 'no solo ejecutamos, pensamos con vos' },
              ].map((item, i) => (
                <li key={i} className="sn-dif-item sdr-scale">
                  <div className="sn-dif-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6l3 3 7-7" stroke="#F6F5E8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="sn-dif-text">
                    <strong style={{ color: '#F6F5E8' }}>{item.t}</strong> — {item.d}
                  </p>
                </li>
              ))}
            </ul>
            <div className="sn-dif-frase sdr-up">
              "No somos asistentes. Somos sistema + equipo."
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISIÓN - TERCIARIO / VISIÓN - CREMITA ══ */}
      <section className="row g-0">
        <div className="bg-2 col-12 col-md-6 p-4 p-md-5">
          <span className="section-eyebrow" style={{ color: 'rgba(64,223,208,.75)' }}>Nuestra misión</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#F6F5E8' }}>Lo que nos mueve cada día</h1>
          <p className="lead mv-quote">
            "Brindar soluciones digitales innovadoras y personalizadas a profesionales, optimizando
            su presencia en línea y permitiéndoles centrarse en su área de especialización."
          </p>
        </div>
        <div className="bg-4 col-12 col-md-6 p-4 p-md-5">
          <span className="section-eyebrow" style={{ color: 'rgba(86,38,137,.75)' }}>Nuestra visión</span>
          <h1 className="palanquin-dark-regular mt-1" style={{ color: '#1a1a2e' }}>Hacia dónde vamos</h1>
          <p className="lead mv-quote mv-quote--dark">
            "Convertirnos en líderes reconocidos en el campo de la asistencia digital, siendo
            el socio preferido para profesionales en la gestión de su presencia en línea."
          </p>
        </div>
      </section>

      {/* ══ NUESTROS CLIENTES — PRIMARIO ══ */}
      <section className="sn-clientes">
        <div className="sn-clientes-inner">
          <span className="section-eyebrow sdr-up" style={{ color: 'rgba(64,223,208,.75)' }}>
            Quiénes confían en nosotros
          </span>
          <h2 className="sn-clientes-h1 sdr-up">
            Nuestros <em>clientes</em>
          </h2>
          <p className="sn-clientes-sub sdr-up">
            Reconocidos profesionales y organizaciones tanto provinciales como nacionales
            que eligen NEXA para ordenar su gestión.
          </p>
          <Slider />
        </div>
      </section>

      {/* ══ EQUIPO — CREMITA ══ */}
      <section className="sn-team">
        <div className="sn-team-inner">
          <div className="sn-team-header">

            {/* columna izquierda: título + texto */}
            <div className="sdr-up">
              <span className="sn-team-eyebrow">Quienes somos y cómo trabajamos</span>
              <h2 className="sn-team-h2">
                Un equipo que piensa con vos
              </h2>
                <p className="lead">
                  En <strong>NEXA</strong> nos especializamos en ofrecer soluciones digitales innovadoras
                  y personalizadas para profesionales que buscan optimizar su presencia en línea y mejorar
                  la eficiencia en sus tareas diarias. Con un equipo dedicado y apasionado, brindamos una
                  gama completa de servicios diseñados para satisfacer las necesidades específicas de cada cliente.
                </p>
            </div>
          </div>

          {/* Natalia al pie */}
          <div className="sn-team-naty sdr-up">
            <div className="sn-naty-avatar">
              <img src={naty} alt="Natalia Chiappino" className="sn-img-fill" />
            </div>
            <div>
              <p className="sn-naty-name">Natalia Chiappino</p>
              <p className="sn-naty-role">Creadora y Directora de NEXA</p>
              <p className="sn-naty-quote">
                Con una sólida trayectoria en centros médicos y el sector comercial, me destaco
                por mi responsabilidad, cordialidad y espíritu extrovertido. Mi capacidad
                organizativa, liderazgo y habilidades en negociaciones y trabajo en equipo
                respaldan mi compromiso con la excelencia y el crecimiento continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}