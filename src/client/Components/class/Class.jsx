import React, { useState, useEffect } from 'react'
import profesor from '../../assets/profesor.jpg'
import './Class.css'
import star from '../../assets/estrella.png'
import axios from 'axios'
import { Filters } from '../filters/Filters'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Class = () => {
  const MySwal = withReactContent(Swal)
  const [logged, setLogged] = useState(false)
  const [u, setUser] = useState('')
  const [hired, setHires] = useState('')
  const [data, dataSet] = useState(null)

  async function fetchClassesFromAPI() {
    //obetener el estado global
    let user = sessionStorage.getItem('userData');
    //console.log(user)
    if (user !== null && !logged) {
      setLogged(true)
      let userParsed = JSON.parse(user)
      setUser(userParsed)
      //si el usuario esta loggeado como alumno puede obtener todas las clases y darse de alta
      await updateData(undefined, user)
      //refrescamos los cursos contratados por el usuario
      const response = await axios.get('http://localhost:3000/class/hire?id='
        + userParsed.id);
      setHires(response.data.hired)
    } else {
      if (!u && !data) {
        //user not logged
        console.log("usuario no loggeado")
        const response = await axios.get('http://localhost:3000/class');
        dataSet(response.data)
        console.log(data)
      }
    }
  }

  async function updateData(type, user) {
    if (!user) user = sessionStorage.getItem('userData');
    let userParsed = JSON.parse(user)
    const response = await axios.get('http://localhost:3000/class?id='
      + userParsed.id + "&role=" + userParsed.role
      + "&type=" + (type === 'exclusive' ? 'exclusive' : 'all'));
    dataSet(response.data)
    console.log(data)
  }

  async function updateDataWhitoutUser(filters) {
    const response = await axios.get('http://localhost:3000/class?' + filters);
    dataSet(response.data)
  }

  function checkCourseAlreadyContracted(item) {
    return hired?.includes(item.id)
  }

  function hire(item) {
    if (u) {
      Swal.fire({
        title: 'Ingrese su disponibilidad horaria y un mensaje para el profesor',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Contratar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return axios.post('http://localhost:3000/class/hire', { userId: u.id, classId: item.id })
            .then(response => {
              if (response.status !== 200) {
                console.log("response no ok")
                throw new Error(response.statusText)
              }
              return response.data
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Contrataste el curso ` + item.name
          }).then((result) => {
            if (result['isConfirmed']) {
              window.location.reload()
            }
          })
        }
      })
    } else {
      MySwal.fire({
        title: 'Error!',
        text: "Por favor, inicie sesión para contratar el curso: " + item.name,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  }

  const inputOptions = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10
  }
  function rate(item) {
    if (u) {
      Swal.fire({
        title: 'Dejenos una calificación para nuestro curso',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return 'Necesitas seleccionar uno'
          }
          console.log(value)
        },
        showCancelButton: true,
        confirmButtonText: 'Calificar',
        showLoaderOnConfirm: true,
        preConfirm: (value) => {
          return axios.post('http://localhost:3000/class/rate', { userId: u.id, classId: item.id, rate: value })
            .then(response => {
              if (response.status !== 200) {
                console.log("response no ok")
                throw new Error(response.statusText)
              }
              return response.data
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Gracias por dejarnos una calificacion'
          }).then((result) => {
            if (result['isConfirmed']) {
              window.location.reload()
            }
          })
        }
      })
    } else {
      MySwal.fire({
        title: 'Error!',
        text: "Por favor, inicie sesión para contratar el curso: " + item.name,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  }


  let useEffectOnce = true
  useEffect(() => {
    if (useEffectOnce) {
      fetchClassesFromAPI()
      useEffectOnce = false
    }
  })


  /*if (!logged) {
    return <div className='class-container'><center>Por favor inicie session</center></div>
  }*/

  return (
    <>
      <Filters updateData={updateData} updateDataWhitoutUser={updateDataWhitoutUser} user={u} />
      <div className='class-container'>
        {
          data?.map((item) => (<article key={item.id} className='article'>
            <figure>
              <img src={profesor} alt={item.teacher} />
            </figure>

            <div className='text'>
              <h3>{item.name}</h3>
              <p>{item.teacher}</p>
              <h6>Materia: {item.topic}</h6>
              <p>
                {item.desc}
              </p>
              {u.role === 'teacher' && item.state !== 'active' ? (
                <h4><font Color='#FF0000'> Curso desactivado </font></h4>
              ) : null}
            </div>

            <div className='price'>
              <span> {item.cost}
                <span> pesos</span>
              </span>

              <p>
                <span>
                  <span><img src={star} height={15} alt="" /></span>
                </span>
                <span>{item.averageRate}</span>
              </p>

              {u.role !== 'teacher' && !checkCourseAlreadyContracted(item) ? <div className='reserve'><button onClick={() => hire(item)}>Contratar</button></div> : null}
              {u.role == 'student' && checkCourseAlreadyContracted(item) ? <div className='reserve'><button onClick={() => rate(item)} style={{ cursor: 'pointer' }}>Calificar</button></div> : null}
              {u.role == 'teacher' ? <div className='reserve'><a href="/clases">Activar/Desactivar</a></div> : null}
              <div className='reserve'><a href="/clase-del-profesor">Ver curso</a></div>
              {u.role !== 'teacher' ? <div className='reserve'><a href="/profesores">Perfil del profesor</a></div> : null}
            </div>

          </article>))
        }
        {data?.length === 0 ? <div><center>No se encontro nada..</center></div> : null}
      </div>
    </>
  )
}
