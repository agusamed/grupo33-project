import React, { useContext } from 'react'
import axios from 'axios'
import './ForgotPassword.css'
import { useHistory } from "react-router-dom";

export const ResetPassword = () => {
  const history = useHistory();
  if (!sessionStorage.getItem('email')) {
    history.push("/recuperar-clave");
    window.location.reload()
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let fruta = sessionStorage.getItem('email')
    const request = { email: fruta, otp: e.target[0].value, password: e.target[1].value };
    //deberia sacarse como variable de entorno pero para este caso localhost esta bien
    const response = await axios.post('http://localhost:3000/resetPassword', request);
    if (response.data.reset) {
      sessionStorage.removeItem('email')
      history.push("/iniciar-sesion");
      window.location.reload()
    } else {
      alert("Revise los datos ingresados");
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Recuperar clave</h3>
      <div className='container-inputs'>
        <input type="number" placeholder='Codigo OTP' title='Codigo OTP' />
        <input type="password" placeholder='Contraseña' title='Contraseña' />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
