import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import validator from 'validator';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    celular: '',
    profesion: '',
    motivo: '',
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(value.trim()))
          return 'El nombre solo debe contener letras y espacios.';
        if (value.trim().length < 2)
          return 'El nombre debe tener al menos 2 caracteres.';
        break;

      case 'email':
        if (!value || !validator.isEmail(value))
          return 'Por favor ingresá un correo electrónico válido.';
        break;

      case 'celular':
        if (!value || !/^[0-9+\s\-()]+$/.test(value))
          return 'El celular solo puede contener números y los símbolos + - ( ).';
        if (value.replace(/\D/g, '').length < 8 || value.replace(/\D/g, '').length > 15)
          return 'El celular debe tener entre 8 y 15 dígitos.';
        break;

      case 'profesion':
        if (!value || value.trim().length < 2)
          return 'Por favor ingresá tu profesión.';
        break;

      case 'motivo':
        if (!value || value.trim().length < 10)
          return 'Contanos brevemente el motivo (mínimo 10 caracteres).';
        break;

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Por favor corregí los errores antes de enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#562689',
        background: '#F6F5E8',
      });
      return;
    }

    emailjs
      .sendForm(
        'service_m8l5wko',
        'template_73pkxe9',
        formRef.current,
        'IFaGqdO1JadyLLx8k'
      )
      .then(() => {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Nos pondremos en contacto con vos a la brevedad.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#562689',
          background: '#F6F5E8',
        });
        setFormData({ nombre: '', email: '', celular: '', profesion: '', motivo: '' });
        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          title: 'Error al enviar',
          text: 'Hubo un problema al enviar el mensaje. Por favor intentá de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#562689',
          background: '#F6F5E8',
        });
      });
  };

  return (
    <>
      <section className="contact-section container-fluid">
        <div className="row g-4">

          {/* MEDIOS DE CONTACTO */}
          <div className="col-12 col-md-6">
            <div className="contact-card h-100">
              <h1>Medios de contacto</h1>

              <div className="contact-info">
                <p>
                  <i className="bi bi-facebook"></i>
                  <strong>Facebook:</strong>
                  <a href="https://facebook.com/tuusuario" target="_blank" rel="noreferrer">
                    /tuusuario
                  </a>
                </p>
                <p>
                  <i className="bi bi-whatsapp"></i>
                  <strong>WhatsApp:</strong>
                  <a href="https://wa.me/tu_numero" target="_blank" rel="noreferrer">
                    +54 9 11 1234-5678
                  </a>
                </p>
                <p>
                  <i className="bi bi-linkedin"></i>
                  <strong>LinkedIn:</strong>
                  <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
                    /tuusuario
                  </a>
                </p>
                <p>
                  <i className="bi bi-instagram"></i>
                  <strong>Instagram:</strong>
                  <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer">
                    @tuusuario
                  </a>
                </p>
              </div>

              <p className="form-invitation">
                También podés agendar una reunión 1 a 1 con nuestro equipo
              </p>

              <button className="btn-reserva text-white rounded-2">
                Reservar un turno
              </button>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="col-12 col-md-6">
            <div className="contact-card contact-form-container h-100">
              <h1 className="pb-3">Formulario de contacto</h1>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>

                {/* NOMBRE */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Nombre y Apellido</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.nombre ? 'is-invalid' : ''}`}
                      placeholder="Ej: María González"
                      required
                    />
                  </div>
                  {errors.nombre && <span className="error-text">{errors.nombre}</span>}
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Ej: maria@email.com"
                      required
                    />
                  </div>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* CELULAR */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Celular</label>
                    <input
                      type="tel"
                      name="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.celular ? 'is-invalid' : ''}`}
                      placeholder="Ej: +54 9 11 1234-5678"
                      required
                    />
                  </div>
                  {errors.celular && <span className="error-text">{errors.celular}</span>}
                </div>

                {/* PROFESIÓN */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Profesión</label>
                    <input
                      type="text"
                      name="profesion"
                      value={formData.profesion}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.profesion ? 'is-invalid' : ''}`}
                      placeholder="Ej: Médica clínica, Odontólogo, Psicóloga..."
                      required
                    />
                  </div>
                  {errors.profesion && <span className="error-text">{errors.profesion}</span>}
                </div>

                {/* MOTIVO DE CONTACTO */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Motivo de contacto</label>
                    <textarea
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.motivo ? 'is-invalid' : ''}`}
                      placeholder="Contanos brevemente qué necesitás y cómo podemos ayudarte..."
                      rows={4}
                      required
                    />
                  </div>
                  {errors.motivo && <span className="error-text">{errors.motivo}</span>}
                </div>

                <button type="submit" className="contact-form-button">
                  Enviar mensaje
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contacto;
