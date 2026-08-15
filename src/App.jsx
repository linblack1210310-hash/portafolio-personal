import { useEffect } from 'react'

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import SobreMi from './Components/SobreMi'
import Habilidades from './Components/Habilidades'
import Tecnologias from './Components/Tecnologias'
import Proyectos from './Components/Proyectos'
import Contacto from './Components/Contacto'

function App() {

  useEffect(() => {

    const secciones = document.querySelectorAll('.seccion')

    const observer = new IntersectionObserver(
      (entradas) => {

        entradas.forEach((entrada) => {

          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible')
          }

        })

      },
      {
        threshold: 0.15
      }
    )

    secciones.forEach((seccion) => {
      observer.observe(seccion)
    })

    return () => {
      observer.disconnect()
    }

  }, [])

  return (
    <div className="app">

      <Navbar />

      <Header />

      <main>

        <SobreMi />

        <Habilidades />

        <Tecnologias />

        <Proyectos />

        <Contacto />

      </main>

    </div>
  )
}

export default App