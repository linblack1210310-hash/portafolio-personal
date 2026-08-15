function Proyectos() {
  return (
    <section id="proyectos" className="seccion proyectos">

      <div className="contenedor">

        <p className="etiqueta">
          PROYECTOS
        </p>

        <h2>
          Proyectos y aprendizaje
        </h2>

        <p className="proyectos-introduccion">
          Actualmente me encuentro desarrollando proyectos
          académicos y personales mientras continúo fortaleciendo
          mis conocimientos en programación y desarrollo de software.
        </p>

        <div className="proyectos-grid">

          {/* PROYECTO 1 */}

          <article className="proyecto-card">

            <div className="proyecto-numero">
              01
            </div>

            <h3>
              Desarrollo con Java
            </h3>

            <p>
              Prácticas y proyectos académicos enfocados en
              programación, programación orientada a objetos
              y desarrollo de aplicaciones.
            </p>

            <div className="proyecto-tecnologias">

              <span>Java</span>
              <span>POO</span>

            </div>

          </article>


          {/* PROYECTO 2 */}

          <article className="proyecto-card">

            <div className="proyecto-numero">
              02
            </div>

            <h3>
              Desarrollo web
            </h3>

            <p>
              Proyectos enfocados en aprender y fortalecer
              conocimientos de HTML, CSS, JavaScript y React.
            </p>

            <div className="proyecto-tecnologias">

              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>

            </div>

          </article>


          {/* PROYECTO 3 */}

          <article className="proyecto-card">

            <div className="proyecto-numero">
              03
            </div>

            <h3>
              Bases de datos
            </h3>

            <p>
              Ejercicios y proyectos académicos relacionados
              con el diseño, organización y manejo de bases
              de datos.
            </p>

            <div className="proyecto-tecnologias">

              <span>MySQL</span>
              <span>SQL</span>

            </div>

          </article>

        </div>

      </div>

    </section>
  )
}

export default Proyectos