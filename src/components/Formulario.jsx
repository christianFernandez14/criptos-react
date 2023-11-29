/* 1 */
import { useEffect } from "react";

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

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);

  /* 2 */
  useEffect(() => {

    /* 3 */
    const consultarAPI = async () => {
      /* 5 */
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      /* 6 */
      const respuesta = await fetch(URL)
      const resultado = await respuesta.json()
      /* 7 */
      console.log(resultado.Data)
    }

    /* 4 */
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
      Consumiendo datos desde una API

  1.- Para esto debemos importar useEffect, ya que este hook es ideal para que trabaje las solicitudes a una Api

  2.- Cuando declare mi useEffect, sin dependecia, ya que quiero que se ejecute una vez, cuando el componete
      Formulario.jsx se cargue
  
  3.- Creamos una funcion dentro del hook que maneje la peticion y lo hacemos con un async awit

  4.- Mandamos a llamar la función.

  5.- Guardamos en una constante la url, donde haremos la petición 

  6.- El uso de async await, es porque no sabemos cuanto puede tardar en traerla, y aca le damos la instruccion
      de que espere hasta que me traiga algo
  
  7.- Hacemos un CLG, para ver como nos trae el resultado, luego de pasarlo a json()

*/