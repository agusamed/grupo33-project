import React from 'react'
import './Contract.css'

export const Contract = () => {
  return (
    
    <div className='contract-container'>
      <h1> Contrataciones </h1>

{/* HEADER TABLA*/}

      <table className='styled-table'>

        <tr>
          <td>Estudiante</td>
          <td>Curso</td>
          <td>Teléfono</td>
          <td>Mail</td>
          <td>Mensaje</td>
          <td>Estado Actual</td>
          <td>Cambiar Estado</td>
        </tr>



{/*OTRAS FILAS*/}

        <tr className='tbody'>

          <td>Patricio Orozco</td>
          <td><a href="/clase-del-profesor">Cosmologia y mecanica cuantica</a></td> {/*Tendría que tomar el nombre y la URL del perfil del curso*/}
          <td>1151234567</td>
          <td>p.orozco@mail.com</td>
          <td>Necesito aprobar un final universitario. Puedo los lunes de 10 a 11. Gracias!</td>
          <td>Aceptada</td>
          
          <td><select>
            <option value="">Pendiente</option>
            <option value="Aceptada">Aceptada</option>
            <option value="Cancelada">Cancelada</option>
            <option value="Terminada">Terminada</option>
          </select></td>

        </tr> 

      </table>
    </div>
  )
}
