import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-section'>
        <ul>
          <li>
            <div className='footer-anchor'>
              <h3>Nuestra empresa</h3>
              <Link to='#'>Sobre nosotros</Link>
              <Link to='#'>Ayuda</Link>
              <Link to='#'>Términos del servicio</Link>
            </div>
          </li>

          <li>
            <div className='footer-anchor'>
              <h3>Recursos</h3>
              <Link to='#'>Dar clases online</Link>
              <Link to='#'>Blog</Link>
              <Link to='#'>Contacto</Link>
            </div>
          </li>

          <li>
            <div className='footer-anchor'>
              <h3>Aprende</h3>
              <Link to='#'>Clases de inglés</Link>
              <Link to='#'>Clases de programación</Link>
              <Link to='#'>Clases de música</Link>
            </div>
          </li>
        </ul>
      </section>
    </footer>
  )
}
