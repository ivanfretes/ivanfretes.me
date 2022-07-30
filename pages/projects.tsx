import type { NextPage } from 'next'
import DefaultLayout from "../components/DefaultLayout";

const  Projects: NextPage = () => {
  return (
   <DefaultLayout title="Proyectos">
    <div>
      <p className='mb-3'>
         Próximamente aquí veras mis proyectos.
      </p>
    </div>
   </DefaultLayout>
  )
}

export default Projects