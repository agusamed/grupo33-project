import React, {useContext} from 'react'
import axios from 'axios'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import MyContext from '../../utils/MyContext';

export const Login = () => {
  const history = useHistory();
  const {setUser} = useContext(MyContext)


  async function handleSubmit(e) {
    e.preventDefault();
    const request = { email: e.target[0].value, password: e.target[1].value };
    //deberia sacarse como variable de entorno pero para este caso localhost esta bien
    const response = await axios.post('http://localhost:3000/login', request);
    if (response.data.logged) {
      //Dejo esto como alternativa para usarlo de manera global
      sessionStorage.setItem('userData', JSON.stringify(response.data))
      setUser(response.data)
      history.push("/");
      window.location.reload()
    } else {
      alert("Revise el email o la contraseña");
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Ingresa al sitio</h3>

      <div className='container-inputs'>
        <input type="email" placeholder='Email' title='Email' />
        <input type="password" placeholder='Contraseña' title='Contraseña' />
      </div>
      <p><Link to="recuperar-clave">¿Olvidaste tu contraseña?</Link></p>
      <button type='submit'>Acceder</button>
    </form>
  )
}
