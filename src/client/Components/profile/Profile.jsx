import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

export const Profile = () => {
  return (
    <div className='profile-container'>
      <h2>Perfil Alumno</h2>
      <hr />

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Nombre</label>
        </div>
        <input type="text" placeholder='Nombre'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Apellido</label>
        </div>
        <input type="text" placeholder='Apellido'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Cumpleaños</label>
        </div>
        <input type="date"/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Estudios cursados</label>
        </div>
        <select>
          <option value="">Selecciona una opcion</option>
          <option value="">Primaria</option>
          <option value="">Secundaria</option>
          <option value="">Terciario</option>
          <option value="">Universitario</option>
        </select>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Estado</label>
        </div>
        <select>
          <option value="">Selecciona una opcion</option>
          <option value="">Completo</option>
          <option value="">En curso</option>
          <option value="">Abandonado</option>
        </select>
      </div>

            <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Email de contacto</label>
        </div>
        <input type="email" name="" id="" placeholder='Email' />
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Tu celular</label>
        </div>
        <input placeholder='Telefono' type="number" />
      </div>

      <button>Guardar</button>
    </div>
  )
}
