import React from 'react';
import './About.css';
import claseVirtual from '../../assets/clase-virtual.png';
import educacionDistancia from '../../assets/educacion-a-distancia.png';
import educacionLinea from '../../assets/educacion-en-linea.png';
import math from '../../assets/math2.jpg';
import history from '../../assets/history.jpg';
import leer from '../../assets/leer.png';
import aulaVirtual from '../../assets/virtual-learning.jpeg'
import calendarioVirtual from '../../assets/virtual-calendar.png'
import profesorVirtual from '../../assets/virtual-profesor.jpg'
import { Link } from 'react-router-dom';

function About () {
  return (
    <section className='about-container'>
      <h1>Aprendé en línea con profesores de todo el mundo</h1>
      <section className='about-cards'>
        <ul>
          <Link to="/clases">
            <li>
            <img src={history}/>
              <div className='about-text'>
                <h4>Clases de Historia</h4>
                <p>con profesores expertos</p>
              </div>
            </li>
          </Link>

          <Link to="/clases">
            <li>
            <img src={math}/>
                <div className='about-text'>
                  <h4>Clases de Matemática</h4>
                  <p>con profesores expertos</p>
                </div>
            </li>
          </Link>
          
        </ul>
      </section>

      <section className='about-formation'>
        <div className='formation-text'>
          <h1>Prepará un examen, asignatura o desarrollá competencias</h1>
          <p>Aprendé o mejorá en más de 100 materias y disciplinas: matemática, programación, marketing...</p>
          <Link to="/clases">
          <button>Encontra a tu profesor ideal</button>
          </Link>
        </div>
        <div id="nosotros" className='formation-detail'>
            <h2>Formación online personalizada, de calidad y segura</h2>
          <ul>
            <li>
              <img src={claseVirtual} alt="" height={50} />
              <h3>Clases 100% flexibles</h3>
              <p>Clases cuando quieras, desde el sofá de casa, despacho, oficina...</p>
            </li>
            <li>
              <img src={educacionDistancia} alt="" height={50} />
              <h3>Satisfacción garantizada</h3>
              <p>Nos encargamos de todo. Así tú podés centrarte en tus clases</p>
            </li>
            <li>
              <img src={educacionLinea} alt="" height={50} />
              <h3>Profesores Certificados</h3>
              <p>Da un salto en tu carrera profesional, dominá un idioma o aprobalo todo</p>
            </li>
            <li>
              <img src={leer} alt="" height={50} />
              <h3>Accesibles para todos</h3>
              <p>Clases económicas: sin matrícula, mínimo de horas, desplazamientos...</p>
            </li>
          </ul>
        </div>
      </section>

      <section className='beginning'>
        <h2>¿Cómo funciona OnClass?</h2>
        <p className='beginning-subtitle'>Simple, son clases online, en directo, con un profesor particular</p>
        <div className='beginning-container'>
          <ul>
            <li>
              <div className='beginning-container-flex'>
                <div className='beginning-container-text'>
                  <h3>Encontrá tu profesor ideal</h3>
                  <p>Entre nuestros miles de profesores, encontrarás a tu profesor ideal. Se adaptará a tus necesidades y te ayudará a alcanzar tus objetivos.</p>
                </div>
                <p className='beginning-number'>1</p>
                <img src={profesorVirtual} alt="" height={150} />
              </div>
            </li>

            <li>
              <div className='beginning-container-flex'>
                <img src={calendarioVirtual} alt="" height={150}/>
                <p className='beginning-number'>2</p>
                <div className='beginning-container-text'>
                  <h3>Organizá las clases con tu vida</h3>
                  <p>Escogé un profesor online según tu disponibilidad horaria y disfrutá de la flexibilidad de las clases en línea.</p>
                </div>
              </div>
            </li>

            <li>
              <div className='beginning-container-flex'>
                <div className='beginning-container-text'>
                  <h3>Aprendé en nuestro aula virtual</h3>
                  <p>Nuestro aula virtual tiene todo lo necesario para que realices las clases sin inconvenientes.</p>
                </div>
                <p className='beginning-number'>3</p>
                <img src={aulaVirtual} alt="" height={150} />
              </div>
            </li>
          </ul>
        </div>
      </section>

    </section>
  );
}

export default About;