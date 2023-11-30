/* 1 - 4 */
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

  /* 5 */
  useEffect(()=> {

    /* 6 */
    if(Object.keys(monedas).length > 0){
      console.log('hay algo')
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
            /* 2 */
            setMonedas={setMonedas}
          />
        </div>
      </Contenedor>
    </>
  )
}

export default App

/* 
    Detectando los valores de la moneda, para renderizarlos en App.jsx

1.- Como debemos mostrar o redenizar el resultado de la cotización de ambas moonedas, debemos
    hacer use de un State, lo importamo al componente

2.- Declaramos este State como un objeto, ya que vamos usar la informacion de monedas y criptomoneda

3.- La unica manera de saber cuales con las monedas que quiere cotizar el usuario es que el componente App.jsx
    sepa de ellas, y para eso debemos enviar la funcion modificadora de monedas (setMonedas), por props a
    Formulario

4.- Ya con el obeto moneda con informacion desde el componente Formulario, vamos hacer uso de useEffect, para
    consultar nuevamente a la API, primero lo iomportamos

5.- Declaramos el useEffect, y le pasamos como dependencia al useEffect monedas, para que chechee todo el tiempo
    si hay cambios

6.- Como el useEffect,s e va ejecutar al cargarse el componente y la funcion de este en particular es se monte 
    cuadno haya algo en el objeto, por eso lo condifionamos con Object.keys, ya que es un objeto
*/
