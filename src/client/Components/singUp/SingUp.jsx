import React, { useContext, useRef } from 'react'
import Singupform from './SingUpForm'
import './SingUp.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const SingUp = () => {
  const history = useHistory();

  async function singup(request) {
    //deberia sacarse como variable de entorno pero para este caso localhost esta bien
    const response = await axios.post('http://localhost:3000/register', request);
    if (response.data.register) {
      history.push("/iniciar-sesion");
      window.location.reload()
    }else {
      alert("El usuario ya se encuentra registrado");
    }
  }


  return (
    <Singupform singUp={singup}/>
  );
}