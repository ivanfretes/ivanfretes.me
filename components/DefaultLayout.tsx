import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { Header } from "./base/Header";

const DefaultLayout = ({ children, title, descriptionHead, descriptionSection } : any) => {
   const titlePage = title == undefined ? 'Iván Fretes' : title + ' - Iván Fretes';
   const descriptionPage = descriptionSection || '';

   return (
      <>
      <div className='container is-fullhd'>
         <Head>
            <title>{ titlePage }</title>
            <meta name="description" content={descriptionHead || 'Apasionado por aprender, leer, dibujar y programar.'} />
            <link rel="icon" type="image/jpg" href="/images/ivan-caricatura.jpeg" />
         </Head>

         <Header />
         <section className="hero my-3 has-text-centered">
            <div className="hero-body">
               <p className='mb-5'>
                  <Link href={'/'}>
                     <Image 
                        src={'/images/ivan-caricatura.jpeg'}
                        width={100}
                        height={100}
                        alt="Ivan Fretes"
                        className='ivan-picture'
                        />               
                  </Link>
               </p>
               <p className="title">
                  {titlePage}
               </p>
               <p className="subtitle">
                  {descriptionPage}
               </p>
            </div>
         </section>

         <div className='my-5'>   
            { children }
         </div>
      </div>

      <footer className="footer mt-5">
         <div className="content has-text-centered">
            <p>
               <strong>{'Iván Fretes'}</strong><br></br> Hecho con ♥ en React + Next + Bulma
            </p>
         </div>
      </footer>
      </>
  );
}

export default DefaultLayout;