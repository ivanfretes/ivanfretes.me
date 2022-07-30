import Link from 'next/link';

export const Header = ({ children } : any) => {
  return (
   <>
     <nav className="navbar is-transparent">
      <div className="navbar-brand">
         <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
         </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
         <div className="navbar-start">
            <Link href={'/'}>
               <a className="navbar-item">
                  Inicio
               </a>
            </Link>
            {/*<Link href={'/about'}>
               <a className="navbar-item">
                  Sobre mi
               </a>
            </Link>*/}
            <Link href={'/projects'}>
               <a className="navbar-item">
                  Proyectos
               </a>
            </Link>
            <a className="navbar-item" href='https://blog.ivanfretes.me' target={'_blank'} rel="noreferrer">
               Blog
            </a>
            <Link href={'/contact'}>
               <a className="navbar-item">
                  Contacto
               </a>
            </Link>
         </div>
         <div className="navbar-end">
            <div className="navbar-item">
            <div className="field is-grouped">  
               <p className="control">
                  <a className="button is-primary" href="mailto:hi@ivanfretes.me">
                  {/*<span className="icon">
                     <i className="fas fa-download" />
                  </span>*/}
                  <span>hi@ivanfretes.me</span>
                  </a>
               </p>
            </div>
            </div>
         </div>
      </div>
      </nav>

   </>
  );
}