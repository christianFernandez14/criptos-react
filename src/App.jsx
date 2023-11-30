import { useState, useEffect } from "react";

import Formulario from './components/Formulario'
import Cotizacion from "./components/Cotizacion";

/* 3 */
import Spinner from "./components/Spinner";

import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`


const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})

  /* 1 */
  const [cargando, setCargando] = useState(false)

  useEffect(()=> {

    if(Object.keys(monedas).length > 0){

      /* 2 */
      setCargando(true)

      /* 4 */
      setCotizacion({})

      const cotizarCripto = async () => {

        const {moneda, criptomoneda} = monedas

        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()

        // console.log(resultado.DISPLAY[criptomoneda][moneda])

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])

        /* 4 */
        setCargando(false)

      }

      cotizarCripto()

    }

  }, [monedas])


  return (
    <>
      <Contenedor>
        <Imagen
          src={imagenCripto}
          alt="Imagen de las criptos monedas"
        />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />

          {/* 3 */}
          {cargando && <Spinner />}
          {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion}/>}
        </div>
      </Contenedor>
    </>
  )
}

export default App

/* 
    Trabajando con un Spinner / miestras se carga la información

  1.- Para esto debo asignarselo a un estado, lo declaramos al inicio de nuestro componente como false

  2.- El estado lo activamos o lo pasamos a "true", justo antes del llamado

  3.- Creamos un componete que Sniper, para que haga el efecto. lo exportamos y lo renderizamos

  4.- Luego que se cargue todo, mandamos a false el estado de "cargando" con su función
      modificadora.
  
  5.- Nos percatamos que no desaparece el resultado anterior cuando queremos cotizar otra moneda
      para esto setemos el estado con un objeto vacio y solucionamos el problema.

*/
