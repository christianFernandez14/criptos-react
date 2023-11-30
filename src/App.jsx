import { useState, useEffect } from "react";

import Formulario from './components/Formulario'
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
        </div>
      </Contenedor>
    </>
  )
}

export default App

/* 
    Cotizando a la API, las monedas a cotizar

1.- Ya con la  información validada que tenemos algo en el obejto de moneda, lo siguiente es consultar
    a la API, por esos valores que tiene el objeto. Creamos una funcion que se encargue de esa consulta y luego
    mandamos a llamar

2.- Declaramos una URL que sera dinamica, ya que voy estar consultando varias monedas con varias cripto

3.- Pero antes hacemos un destructuring a monedas, para tener sus propiedades como variables, para pasarsela
    a la URL

4.- Hacemos la consulta con fetch a la API

5.- En la validacion de que me traiga lo que quiero nos percatamos que las monedas estan entrelazadas como objetos
    por lo tanto lo qu hicimos fue una consulta mas dinamica, una sintanxis de corchete([]) y ya asi puedo entrar
    a la información que requiero del par que escoja entre las monedas

6.- Ya con la información en mano de lo que queremos mostrar, podemos guardarlo en State, para eso lo declarmos
    primero, como un objeto

7.- Le pasmos la respuesta al estado de cotización, a traves de funcion modificadora.

*/
