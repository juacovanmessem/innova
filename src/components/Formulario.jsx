import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import validator from 'validator';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value || !/^[a-zA-Z\s]+$/.test(value)) {
          return 'El nombre solo debe contener letras y espacios.';
        }
        break;
      case 'email':
        if (!value || !validator.isEmail(value)) {
          return 'Por favor, ingresa un correo electrónico válido.';
        }
        break;
      case 'telefono':
        if (!value || !/^[0-9]+$/.test(value) || value.length < 8 || value.length > 15) {
          return 'Por favor, ingresa un número de teléfono válido (8-15 dígitos).';
        }
        break;
      case 'mensaje':
        if (!value || value.trim().length < 10) {
          return 'Por favor, ingresa un mensaje de al menos 10 caracteres.';
        }
        break;
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, corrige los errores antes de enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
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
          title: 'Éxito',
          text: 'El correo se ha enviado con éxito. Nos pondremos en contacto pronto.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        });
        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      });
  };

  return (
    <>
      <section className="contact-section container-fluid">
        <div className="row g-4">

          {/* CONTACTO */}
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

              <button
                onClick={() => handleClickSchedule(schedule, link)}
                className="btn-reserva text-white rounded-2"
              >
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
                      required
                    />
                  </div>
                  {errors.nombre && (
                    <span className="error-text">{errors.nombre}</span>
                  )}
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
                      required
                    />
                  </div>
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                {/* TELEFONO */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Teléfono / Celular</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.telefono ? 'is-invalid' : ''}`}
                      required
                    />
                  </div>
                  {errors.telefono && (
                    <span className="error-text">{errors.telefono}</span>
                  )}
                </div>

                {/* MENSAJE */}
                <div className="form-group">
                  <div className="input-wrapper">
                    <label className="contact-form-label">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={`contact-form-input ${errors.mensaje ? 'is-invalid' : ''}`}
                      rows={4}
                      required
                    />
                  </div>
                  {errors.mensaje && (
                    <span className="error-text">{errors.mensaje}</span>
                  )}
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
