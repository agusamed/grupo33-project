import axios from 'axios';
import React, { useState } from 'react'
import './ClassUpload.css'
import { useHistory } from "react-router-dom";


export const ClassUpload = () => {

  const history = useHistory();
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedFrequency, setSelectedFrequency] = useState();

  const handleTopic = (e) => {
    setSelectedTopic(e.target.value)
  }
  const handleType = (e) => {
    setSelectedType(e.target.value);
  }
  const handleFrequency = (e) => {
    setSelectedFrequency(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let user = sessionStorage.getItem('userData');
    let userParsed = JSON.parse(user)
    const request = {
      name: e.target[0].value,
      topic: e.target[1].value,
      typeClass: e.target[2].value,
      frequency: e.target[3].value,
      duration: +e.target[4].value,
      cost: +e.target[5].value,
      rates: [],
      comments: [],
      averageRate: 0,
      state: 'active',
      teacher: userParsed.id,
      desc: e.target[6].value
    };
    console.log(request)
    const response = await axios.post('http://localhost:3000/class', request);
    if (response.data.message === "ok") {
      history.push("/clases");
      window.location.reload()
    } else {
      alert("No se pudo registrar la clase, intente mas tarde...");
    }
  }

  return (
    <div className='profile-container'>
      <h2>Cargar nuevo curso</h2>
      <hr />

      <form className='form' onSubmit={handleSubmit}>
        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Nombre del Curso</label>
          </div>
          <input required type="text" placeholder='Nombre' />
        </div>

        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Materia</label>
          </div>
          <select required onChange={handleTopic}
            value={selectedTopic}>
            <option value="Matematicas">Matematicas</option>
            <option value="Fisica">Fisica</option>
            <option value="Historia">Historia</option>
            <option value="Ingles">Ingles</option>
            <option value="Guitarra">Guitarra</option>
            <option value="Programacion">Programacion</option>
            <option value="Chino">Chino</option>
          </select>
        </div>

        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Tipo de clase</label>
          </div>
          <select onChange={handleType} value={selectedType}>
            <option value="Individual">Individual</option>
            <option value="Grupal">Grupal</option>
          </select>
        </div>

        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Frecuencia</label>
          </div>
          <select onChange={handleFrequency} value={selectedFrequency}>
            <option value="única">única</option>
            <option value="semanal">semanal</option>
            <option value="mensual">mensual</option>
          </select>
        </div>


        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Duración</label>
          </div>
          <input required type="number" placeholder='en minutos' />
        </div>

        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Precio por clase</label>
          </div>
          <input required type="number" placeholder='Precio en $ ARS' />
        </div>

        <div className='profile-flex'>
          <div className='label-ctn'>
            <label>Descripción</label>
          </div>
          <input required type="text" placeholder='Descripcion' />
        </div>

        <button>Guardar</button>
      </form>
    </div>
  )
}
