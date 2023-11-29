/* 6 */
import { useState, useEffect } from "react";

import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from '../data/monedas'
import styled from "@emotion/styled"

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease-in-out;
  margin-top: 30px;

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`
const Formulario = () => {
  
  /* 7 */
  const [criptos, setCriptos] = useState([])

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);

  useEffect(() => {

    const consultarAPI = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(URL)
      const resultado = await respuesta.json()

      /* 1 */
      const arrayCripto = resultado.Data.map(cripto => {

        /* 3 */
        const objetoCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

        /* 2 */
        // console.log(cripto.CoinInfo.Name, cripto.CoinInfo.FullName)

        /* 4 */
        return objetoCripto
      })
      /* 5 */
      console.log(arrayCripto)

      /* 8 */
      setCriptos(arrayCripto)
    }

    consultarAPI()
  }, [])


  return (
    <form>
      < SelectMonedas />

      <InputSubmit
        type="submit"
        value='cotizar'
      />
    </form>
  )
}

export default Formulario

/* 
      Creando un array con la informacion que queremos de la API

  1.- Guardamos lo que hay CoinInfo, dentro del array "arrayCripto"

  2.- Luego de verificar que lo que quiero me lo esta mostrando.
  
  3.- Creo un objeto literal con la info de Name y FullNme, que esta en la API, bajo el mismo esquema que se diseño monedas (monedas.js)

  4.- Retornamos el objeto, ya que no estamos trabajando con return implicito

  5.- Hacemos un CLG del array (arrayCripto), para ir verificando que tenemos la informacion
      estructurada en nuestro obejto con la info de la Api

  6.- Con esta informacin (el array de criptos), debemos guardarlo en un State, lo importamos

  7.- Lo inicializamos.

  8.- Le pasamos a la funcion de setCriptos el array que sacamos de la API
*/