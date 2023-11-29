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

  const [criptos, setCriptos] = useState([])

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  /* 1 */
  const [criptomonedas, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  useEffect(() => {

    const consultarAPI = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(URL)
      const resultado = await respuesta.json()

      const arrayCripto = resultado.Data.map(cripto => {

        const objetoCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objetoCripto
      })

      setCriptos(arrayCripto)
    }

    consultarAPI()
  }, [])


  return (
    <form>
      < SelectMonedas />

      {/* 2 */}
      <SelectCriptomonedas />

      <InputSubmit
        type="submit"
        value='cotizar'
      />
    </form>
  )
}

export default Formulario

/* 
    Incorporando un segundo Select con el hook useSelectMonedas()

  1.- Hacemos practicamente una copia de la declracion de moneda, pero en este caso para la criptomoneda

  2.- Renderizamos el Select (Recuerda que esta definido como una funcion que retorna un html)
*/