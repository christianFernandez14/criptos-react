import styled from "@emotion/styled"
import { useState, useEffect } from "react";

import Error from "./Error";

import { monedas } from '../data/monedas'
import useSelectMonedas from "../hooks/useSelectMonedas"

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
const Formulario = ({ setMonedas }) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos);

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

  const handleSubmit = e => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes('')) {
      setError(true)

      return;
    }
    setError(false)

    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
    <>
      {error && <Error>Todo los campos son obligatorios</Error>}

      <form
        onSubmit={handleSubmit}
      >
        < SelectMonedas />
        <SelectCriptomonedas />

        <InputSubmit
          type="submit"
          value='cotizar'
        />
      </form>
    </>
  )
}

export default Formulario
