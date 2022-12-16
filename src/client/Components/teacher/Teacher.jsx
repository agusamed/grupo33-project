import React from 'react'
import './Teacher.css'
import profesor from '../../assets/profesor.jpg'
import star from '../../assets/estrella.png'
import { Link } from 'react-router-dom'

export const Teacher = () => {
  return (
    <div className='teacher-container'>
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
          </div>
        </div>

      </section>

      {/* <section className='teacher-prices'>
        <div className='teacher-price'>
          <span> $5.000
            <span> ARS por clase </span>
          </span>

          <div className='teacher-reserve'><a href="">Reservar clase</a></div>
        </div>
      </section> */}

      <section className='description'>
        <h2>Presentacion</h2>
        <p>Hola, soy Gasty Velez, Analista de Sistemas. Me dedico a la docencia hace ya unos 25 años y puedo ayudarte con tus dudas en temas de Informática, Programación y Diseño UX/UI. <br />

        Mi especialidad son las clases online que vengo desarrollando en plataformas educativas desde el año 2005, con alumnos de nivel primario, secundario y universitario.
        Las clases las organizo según lo que cada alumno necesita consultar y ayudándolo a conseguir sus objetivos.</p>
      </section>

      <section className='teacher-date'>
        <h3>Cursos disponibles</h3>
        <Link to="/clase-del-profesor">
          <p> Cosmologia y mecanica cuantica </p>
          </Link>
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
              <p>Muy buen profesor, super atento, gracias al el supere mis niveles de comunicacion.</p>
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
