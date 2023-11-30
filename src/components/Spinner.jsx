
/* 2 */
import '../style/Spinner.css'


const Spinner = () => {
  return (

    /* 1 */
    <div className="sk-circle">
      <div className="sk-circle1 sk-child"></div>
      <div className="sk-circle2 sk-child"></div>
      <div className="sk-circle3 sk-child"></div>
      <div className="sk-circle4 sk-child"></div>
      <div className="sk-circle5 sk-child"></div>
      <div className="sk-circle6 sk-child"></div>
      <div className="sk-circle7 sk-child"></div>
      <div className="sk-circle8 sk-child"></div>
      <div className="sk-circle9 sk-child"></div>
      <div className="sk-circle10 sk-child"></div>
      <div className="sk-circle11 sk-child"></div>
      <div className="sk-circle12 sk-child"></div>
    </div>
  )
}

export default Spinner


/* 
    Componete que se encargara de mostrar un Spinner

 1.- Incorporamos una estructura HTML del portal SpinKit

 2.- Como el css del Spinner, es muy largo y no queremos ensunciar el Componete, lo enviamos a otra carpeta
     dentro de /SRC de nombre style, y ahi colocamos todo el codigo CSS, importamos esa hoja de estilo, 
     con su extensión y todo 

*/


