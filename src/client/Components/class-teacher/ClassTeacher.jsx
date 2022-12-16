import React from 'react'
import './ClassTeacher.css'
import profesor from '../../assets/profesor.jpg'
import star from '../../assets/estrella.png'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

export const ClassTeacher = () => {
  
  return (
    <div className='class-teacher-ctn'>
      <section className='teacher-profile'>
        <div className='img-profile'>
          <figure>
            <img src={profesor} alt="" />
          </figure>
        </div>

        <div className='title'>
          <div>
            <h1>Gasty Velez</h1>
            <p>Profesor de Colombia</p>
          </div>

          <div>
            <span>
              <span><img src={star} height={20} alt="" /></span>
              <span><img src={star} height={20} alt="" /></span>
              <span><img src={star} height={20} alt="" /></span>
              <span><img src={star} height={20} alt="" /></span>
              <span><img src={star} height={20} alt="" /></span>
            </span>
            <p>3 Valoraciones</p>

            <div className='reserve'><Link to="/profesores">Perfil del profesor</Link></div>
          </div>
        </div>

      </section>

    <section className='class-teacher-description'>
      <h3><b>Cosmologia y mecanica cuantica</b></h3>
      <h4>¡Hola! Soy Gasty y te invito a mi curso de fisica en donde vamos a estudiar sobre cosmologia y mecanica cuantica.</h4>
      <p>Duración de la clase: 60 minutos</p>
      <p>Costo: $1.500 ARS por clase</p>
    </section>

    <section className='class-teacher-date'>
        <h3>Reservar una clase online</h3>
        <div className='reserve'><a href="/clases">Contratar</a></div>
     </section>

      <section className='students'>
        <h3>Comentarios de alumnos</h3>
          <article>
            <div className='students-comments'>
              <p>Muy buen profesor,atento al detalle entrega material y te acompaña a cada momento!</p>
            </div>
            <div>
              <figure>
                <h3>Rafael Martinez</h3>
                <span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                </span>
              </figure>
            </div>
          </article>
          <hr />
          <article>
            <div className='students-comments'>
              <p>Tiene mucha paz para enseñar, lo recomiendo mucho es muy dedicado!</p>
            </div>
            <div>
              <figure>
                <h3>Bruno Diaz</h3>
                <span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                </span>
              </figure>
            </div>
          </article>
          <hr />
          <article>
            <div className='students-comments'>
              <p>Muy buen profesor, super atento, gracias al él pude resolver varios challenge.</p>
            </div>
            <div>
              <figure>
                <h3>Micaela Rojas</h3>
                <span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                  <span><img src={star} height={15} alt="" /></span>
                </span>
              </figure>
            </div>
          </article>
      </section>

    </div>
  )
}
