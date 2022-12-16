import React from 'react'
import './StClasses.css'

export const StClasses = () => {
  return (
    
    <div className='class-container'>
      <h1> Mis Clases </h1>

{/* HEADER TABLA*/}

      <table className='styled-table'>

        <tr>
          <td>Curso</td>
          <td>Materia</td>
          <td>Profesor</td>
          <td>Estado Actual</td>
          <td>Cambiar Estado</td>
        </tr>

{/*OTRAS FILAS*/}

        <tr className='tbody'>

        <td><a href="/clase-del-profesor">Cosmologia y mecanica cuantica</a></td> {/*Tendría que tomar el nombre y la URL del perfil del curso*/}
        <td>Fisica</td> 
        <td><a href="/profesores">Gasty Velez</a></td>
        <td>Aceptada</td>
                    
          <td><select>
            <option value="">Pendiente</option>
            <option value="Cancelada">Cancelada</option>
            <option value="Terminada">Terminada</option>
          </select></td>

        </tr> 

      </table>
    </div>
  )
}
