import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header () {
    return (
      <div className='header-container'>
        <div className='header-text'>
          <h1>Aprendé desde casa con clases particulares online</h1>
          <p>Elegí entre profesores de todo el mundo y recibí clases
          en línea orientadas a tu objetivo.</p>
          <div className='search'>
          <Link to="/clases">
            <button>Ver los cursos disponibles</button>
          </Link>
          </div>
        </div>
      </div>
    );
}

export default Header