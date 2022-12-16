import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Teacher } from '../teacher/Teacher'
import './Filters.css'

export const Filters = ({ updateData, updateDataWhitoutUser, user }) => {
  const [role, setRole] = useState('indefinido')
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedFrequency, setSelectedFrequency] = useState();
  const [selectedRate, setSelectedRate] = useState();

  useEffect(() => {
    let user = sessionStorage.getItem('userData');
    if (user) {
      let userParsed = JSON.parse(user)
      setRole(userParsed.role)
    }
  })

  const onChange = (e) => {
    updateData(e.target.value)
  }
  const searchByFilters = (e) => {
    if (!user) {
      updateDataWhitoutUser(
        "topic=" + selectedTopic
        + "&typeClass=" + selectedType
        + "&frequency=" + selectedFrequency
        + "&rate=" + selectedRate)
    } else updateDataWhitoutUser(
      "topic=" + selectedTopic
      + "&typeClass=" + selectedType
      + "&frequency=" + selectedFrequency
      + "&rate=" + selectedRate
      + "&id=" + user.id + "&role=" + user.role
    )
  }

  const resetFilters = () => {
    updateDataWhitoutUser('')
  }

  const handleTopic = (e) => {
    setSelectedTopic(e.target.value)
  }

  const handleType = (e) => {
    setSelectedType(e.target.value);
  }

  const handleFrequency = (e) => {
    setSelectedFrequency(e.target.value)
  }

  const handleRate = (e) => {
    setSelectedRate(e.target.value);
  }

  var customFilters
  if (role === 'student') {
    customFilters = (
      <select onChange={onChange}>
        <option value="all">Todos</option>
        <option value="exclusive">Mis clases</option>
      </select>
    )
  } else if (role === 'teacher') {
    customFilters = (
      <>
        <select onChange={onChange}>
          <option value="all">Mis cursos</option>
          <option value="exclusive">Cursos activos</option>
        </select>
        <div className='reserve'><Link to="/nueva-clase">Crear curso</Link></div>
      </>
    )
  }
  return (
    <div className='filter-container'>

      <select onChange={handleTopic}
        value={selectedTopic}>
        <option value="">Materias</option>
        <option value="Matematicas">Matematicas</option>
        <option value="Fisica">Fisica</option>
        <option value="Historia">Historia</option>
        <option value="Programacion">Programacion</option>
        <option value="Chino">Chino</option>
      </select>

      <select onChange={handleType} value={selectedType}>
        <option value="">Tipo</option>
        <option value="Individual">Individual</option>
        <option value="Grupal">Grupal</option>
      </select>

      <select onChange={handleFrequency} value={selectedFrequency}>
        <option value="">Frecuencia</option>
        <option value="única">única</option>
        <option value="semanal">semanal</option>
        <option value="mensual">mensual</option>
      </select>

      <input type='number' placeholder="Calificación 1-10" max={10} onChange={handleRate} />

      <button onClick={searchByFilters}>Buscar</button>
      <button onClick={resetFilters}>Reset</button>

      {customFilters}

    </div >
  )
}
