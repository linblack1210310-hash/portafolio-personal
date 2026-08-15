import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faInstagram,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contacto() {
  return (
    <section id="contacto" className="seccion contacto">

      <div className="contenedor contacto-contenido">

        <p className="etiqueta">
          CONTACTO
        </p>

        <h2>
          Hablemos
        </h2>

        <p>
          Estoy interesado en continuar aprendiendo,
          desarrollar nuevos proyectos y seguir creciendo
          en el mundo del desarrollo de software.
        </p>


        <div className="contacto-opciones">

          {/* CORREO */}

          <a
            href="mailto:bran.smith.101089@hotmail.com"
            className="contacto-item"
          >

            <div className="contacto-icono">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>
              <h3>
                Correo
              </h3>

              <p>
                bran.smith.101089@hotmail.com
              </p>
            </div>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/linblack1210310-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-item"
          >

            <div className="contacto-icono">
              <FontAwesomeIcon icon={faGithub} />
            </div>

            <div>
              <h3>
                GitHub
              </h3>

              <p>
                linblack1210310-hash
              </p>
            </div>

          </a>


          {/* INSTAGRAM */}

          <a
            href="#"
            className="contacto-item"
          >

            <div className="contacto-icono">
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div>
              <h3>
                Instagram
              </h3>

              <p>
                Próximamente
              </p>
            </div>

          </a>


          {/* FACEBOOK */}

          <a
            href="#"
            className="contacto-item"
          >

            <div className="contacto-icono">
              <FontAwesomeIcon icon={faFacebook} />
            </div>

            <div>
              <h3>
                Facebook
              </h3>

              <p>
                Próximamente
              </p>
            </div>

          </a>


          {/* WHATSAPP */}

          <a
            href="#"
            className="contacto-item"
          >

            <div className="contacto-icono">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            <div>
              <h3>
                WhatsApp
              </h3>

              <p>
                Próximamente
              </p>
            </div>

          </a>

        </div>


        {/* UBICACIÓN */}

        <p className="contacto-ubicacion">
          📍 Armenia, Quindío
        </p>

      </div>

    </section>
  )
}

export default Contacto