import React, { useContext } from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.jpeg'
import { Link, useHistory } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import userIcon from '../../assets/user_icon.png';
import { HashLink } from 'react-router-hash-link';
import MyContext from '../../utils/MyContext'
export const LoggedNavbar = () => {
  const history = useHistory();
  const {user, setUser} = useContext(MyContext)
  function handleLogout(){
    sessionStorage.removeItem('userData')
    setUser({})
    history.push("/");
    window.location.reload()
  }

  return (
    // HEADER //
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
          {/* MENU DESPLEGABLE */}
          <Dropdown>
            <Dropdown.Toggle variant="default" className="dropdown-user">
              <img src={userIcon} alt="" height={50} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* MENU ESTUDIANTE */}
              {user.role ==='student' && <Dropdown.Item href="/mi-perfil">Mi perfil</Dropdown.Item>}
              {user.role ==='student' && <Dropdown.Item href="/mis-clases">Mis clases</Dropdown.Item>}
              {/* MENU PROFESOR */}
              {user.role ==='teacher' && <Dropdown.Item href="/profesores">Mi perfil</Dropdown.Item>}
              {user.role ==='teacher' && <Dropdown.Item href="/mi-perfil-profesor">Editar perfil</Dropdown.Item>}
              {user.role ==='teacher' && <Dropdown.Item href="/clases">Mis cursos</Dropdown.Item>}
              {user.role ==='teacher' && <Dropdown.Item href="/contrataciones">Contrataciones</Dropdown.Item>}
              {user.role ==='teacher' && <Dropdown.Item href="/nueva-clase">Cargar nuevo curso</Dropdown.Item>}
              {/* CERRAR SESION */}
              <Dropdown.Item  onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </div>
  )
}
