function Header() {

  const irAProyectos = () => {

    const proyectos = document.getElementById("proyectos")

    if (!proyectos) {
      console.log("No se encontró la sección de proyectos")
      return
    }

    const posicion =
      proyectos.getBoundingClientRect().top +
      window.scrollY -
      80

    window.scrollTo({
      top: posicion,
      behavior: "smooth"
    })
  }

  return (
    <header id="inicio" className="hero">

      <div className="hero-contenido">

        <div className="hero-texto">

          <p className="hero-saludo">
            👋 Hola, soy
          </p>

          <h1>
            Bran Smith Vargas Camero
          </h1>

          <h2>
            Tecnólogo en Análisis y Desarrollo de Software
          </h2>

          <p className="hero-descripcion">
            Soy un estudiante interesado en el desarrollo de software,
            con interés en implementar y fortalecer mis habilidades
            enfocadas en la programación.
          </p>

          <p className="hero-ubicacion">
            📍 Armenia, Quindío
          </p>

          <button
            type="button"
            className="hero-boton"
            onClick={irAProyectos}
          >
            Ver mis proyectos
          </button>

        </div>

        <div className="hero-foto">

          <img
            src="/images/foto-perfil.jpg"
            alt="Foto de perfil"
            className="foto-perfil"
          />

        </div>

      </div>

    </header>
  )
}

export default Header