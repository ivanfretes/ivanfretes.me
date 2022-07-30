import type { NextPage } from 'next'
import DefaultLayout from "../components/DefaultLayout";

const  IndexPage: NextPage = () => {
  return (
   <DefaultLayout 
      descriptionSection="Apasionado por aprender, leer, dibujar y programar.">
    <div>
      <p className='mb-3'>
         Programador con más de 10 años en el mundo del software y aprendizaje continuo, me dan experiencia para analizar, diseñar, construir e integrar funciones. Tuve la oportunidad de integrarme a proyectos para diversas áreas y sectores (Hoteles, Agencias de Viajes, Universidades, Inmobiliarias, etc). 
      </p>
      <p className='mb-3'>
         Me adapto a tecnologías y metodologías fácilmente. Apunto a ser autodidacta, todos los día busco aprender por mi cuenta.
      </p>
      <hr></hr>
    </div>
   <div>
      <h3 className="is-size-4 has-text-centered">
         Tecnologias con las que trabajo
      </h3>
   </div>
   <div>
      <h3 className="is-size-5">
         Backend
      </h3>
      
      <div className="columns my-5 has-text-centered">
         <div className="column has-background-primary has-text-white m-2 ">
            PHP + Laravel
         </div>
         <div className="column has-background-primary has-text-white m-2 ">
            Node + ... + Nest 
         </div>
      </div>
   </div>
   <div>
      <h3 className="is-size-5">
         Base de Datos
      </h3>
      
      <div className="columns my-5 has-text-centered">
         <div className="column has-background-light m-2 ">
            MySQL | MariaDB
         </div>
         <div className="column has-background-light m-2 ">
            PostgreSQL
         </div>
         <div className="column has-background-light m-2 ">
            Dynamo
         </div>
         <div className="column has-background-light m-2 ">
            Mongo
         </div>
         <div className="column has-background-light m-2 ">
            Neo4j
         </div>
      </div>
   </div>
   <div>
      <h3 className="is-size-5">
         Frontend
      </h3>
      
      <div className="columns my-5 ">
         <div className="column has-background-link has-text-white m-2 ">
            React + ... + Next
         </div>
         <div className="column has-background-link has-text-white m-2 ">
            Vue + ... + Nuxt
         </div>
         <div className="column has-background-link has-text-white m-2 ">
            Angular + Ionic
         </div>
      </div>
   </div>
   <div>
      <h3 className="is-size-5">
         Testing
      </h3>
      
      <div className="columns my-5 ">
         <div className="column has-background-warning m-2 ">
            Cypress
         </div>
         <div className="column has-background-warning m-2 ">
            Jest
         </div>
      </div>
   </div>
   
   </DefaultLayout>
  )
}

export default IndexPage