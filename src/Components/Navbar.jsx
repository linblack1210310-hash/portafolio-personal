import { useState } from 'react'
import gamerIcon from '../assets/icons/gamer.png'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Hace scroll suave hacia la sección indicada y cierra el menú (en móvil)
  const irASeccion = (id) => {
    const seccion = document.getElementById(id)

    if (!seccion) {
      console.log('No se encontró la sección:', id)
      return
    }

    const posicion =
      seccion.getBoundingClientRect().top +
      window.scrollY -
      80 // compensa la altura del navbar fijo

    window.scrollTo({
      top: posicion,
      behavior: 'smooth'
    })

    setMenuAbierto(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-contenido">

        {/* LOGO */}
        <button
          type="button"
          className="navbar-logo"
          onClick={() => irASeccion('inicio')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <img
            src={gamerIcon}
            alt="Icono gamer"
            style={{
              width: '45px',
              height: '45px',
              objectFit: 'contain'
            }}
          />
          <span>MI PERFIL PROFESIONAL</span>
        </button>

        {/* BOTÓN MENÚ (hamburguesa, para móvil) */}
        <button
          type="button"
          className="navbar-menu-boton"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? '✕' : '☰'}
        </button>

        {/* ENLACES DE NAVEGACIÓN */}
        <div
          className={`navbar-enlaces ${
            menuAbierto ? 'menu-abierto' : ''
          }`}
        >
          <button type="button" onClick={() => irASeccion('sobre-mi')}>
            👤 Información Personal
          </button>

          <button type="button" onClick={() => irASeccion('habilidades')}>
            ⚡ Habilidades
          </button>

          <button type="button" onClick={() => irASeccion('tecnologias')}>
            💻 Herramientas Tecnológicas
          </button>

          <button type="button" onClick={() => irASeccion('proyectos')}>
            🚀 Proyectos
          </button>

          <button type="button" onClick={() => irASeccion('contacto')}>
            📩 Contacto
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
