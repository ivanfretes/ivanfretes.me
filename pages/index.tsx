import type { NextPage } from 'next'
import DefaultLayout from "../components/DefaultLayout";

const  IndexPage: NextPage = () => {
  return (
   <DefaultLayout 
      descriptionSection="Apasionado por aprender, leer, dibujar y programar.">
    <div>
      <p className='mb-3'>
         Más de 10 años en consultoria y desarrollo que me brindan la experiencia para analizar, diseñar, construir e integrar software.
      </p>
      <p className='mb-3'>
         Durante los últimos años me integre a células de diversas áreas y sectores. Principalmente en la modalidad remota.
      </p>
      <p className="mb-3">
         Cuento con experiencia en metodologías ágiles (Scrum, Kanban, XP). Me adapto fácilmente a diferentes stacks tecnológicos. Apunto a ser autodidacta, cada día busco seguir aprendiendo.
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
         <div className="column has-background-primary has-text-white m-2 ">
            Python + ... + Django/Flask
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
         <div className="column has-background-light m-2 ">
            Firebase
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

   <div>
      <h3 className="is-size-5">
         Infraestructura (DevOps)
      </h3>
      
      <div className="columns my-5 ">
         <div className="column has-background-secondary m-2 ">
            Docker
         </div>
         <div className="column has-background-secondary m-2 ">
            AWS
         </div>
         <div className="column has-background-secondary m-2 ">
            GCP
         </div>
         <div className="column has-background-secondary m-2 ">
            DO
         </div>
      </div>
   </div>
   
   </DefaultLayout>
  )
}

export default IndexPage