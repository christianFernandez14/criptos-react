import { useState, useEffect } from "react";

import Formulario from './components/Formulario'

/* 1 */
import Cotizacion from "./components/Cotizacion";
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

  /* 6 */
  const [cotizacion, setCotizacion] = useState({})

  useEffect(()=> {

    if(Object.keys(monedas).length > 0){

      /* 1 */
      const cotizarCripto = async () => {

        /* 3 */
        const {moneda, criptomoneda} = monedas

        /* 2 */
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        // console.log(URL)

        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()

        /* 5 */
        // console.log(resultado.DISPLAY[criptomoneda][moneda])

        /* 7 */
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])

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
          {/* 2 - 3 */}
          {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion}/>}
        </div>
      </Contenedor>
    </>
  )
}

export default App

/* 
    Cotizando a la API, las monedas a cotizar

1.- Importando Componente Cotizacion, para ser renderizado

2.- Lo renderizamos, pero bajo una condicion, ya que si no se la aplicas el componente se mostrara igual
    inclusive si haberle dado click a cotizar; y lo que hicimos fue tomar una propiedad (PRICE) del objeto
    que ya esta en el State y si existe ahi si se renderiza

3.- Le pamos cotizacion como props, para que podamos diseñar como se mostrara aca


*/
