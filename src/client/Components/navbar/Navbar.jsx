import React from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/clases">CURSOS</Link></li>
        <li><HashLink smooth to="/#nosotros">SOBRE NOSOTROS</HashLink></li>
      </ul>
      <div>
        <ul className='navbar-login'>
          <li><Link to="/iniciar-sesion">INGRESAR</Link></li>
          <li><Link to="/registro">REGISTRARSE</Link></li>
        </ul>
      </div>
    </div>
  )
}
