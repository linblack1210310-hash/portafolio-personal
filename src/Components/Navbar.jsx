
import { useState } from 'react'

function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const irASeccion = (id) => {
    const seccion = document.getElementById(id)

    if (!seccion) {
      console.log("No se encontró la sección:", id)
      return
    }

    const posicion =
      seccion.getBoundingClientRect().top +
      window.scrollY -
      80

    window.scrollTo({
      top: posicion,
      behavior: "smooth"
    })

    setMenuAbierto(false)
  }

  return (
    <nav className="navbar">

      <div className="navbar-contenido">

        <button
          type="button"
          className="navbar-logo"
          onClick={() => irASeccion("inicio")}
        >
          MI PERFIL PROFESIONAL
        </button>

        <button
          type="button"
          className="navbar-menu-boton"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        <div
          className={`navbar-enlaces ${
            menuAbierto ? "menu-abierto" : ""
          }`}
        >

          <button
            type="button"
            onClick={() => irASeccion("sobre-mi")}
          >
            Informacion Personal
          </button>

          <button
            type="button"
            onClick={() => irASeccion("habilidades")}
          >
            Habilidades
          </button>

          <button
            type="button"
            onClick={() => irASeccion("tecnologias")}
          >
            Herramientas Tecnologicas
          </button>

          <button
            type="button"
            onClick={() => irASeccion("proyectos")}
          >
            Proyectos
          </button>

          <button
            type="button"
            onClick={() => irASeccion("contacto")}
          >
            Contacto
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar