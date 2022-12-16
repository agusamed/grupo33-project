import React, { useContext } from 'react'
import axios from 'axios'
import './ForgotPassword.css'
import { useHistory } from "react-router-dom";

export const ForgotPassword = () => {
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    const request = { email: e.target[0].value };
    sessionStorage.setItem('email', e.target[0].value)
    //deberia sacarse como variable de entorno pero para este caso localhost esta bien
    const response = await axios.post('http://localhost:3000/sendOTP', request);
    if (response.data.sended) {
      history.push("/cambiar-clave");
      window.location.reload()
    } else {
      alert("Revise el email");
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Recuperar clave</h3>
      <div className='container-inputs'>
        <input type="email" placeholder='Email' title='Email' />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
