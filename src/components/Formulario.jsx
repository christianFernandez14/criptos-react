import { useState, useEffect } from "react";

/* 8 */
import Error from "./Error";

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
  /* 5 */
  const [error, setError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
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

  /* 2 */
  const handleSubmit = e => {
    e.preventDefault();

    /* 3 */
    if ([moneda, criptomonedas].includes('')) {

      /* 6 */
      setError(true)

      /* 4 */
      return;
    }
    /* 9 */
    setError(false)

  }

  return (
    <>
      {/* 7 */}
      {error && <Error>Todo los campos son obligatorios</Error>}

      <form
        /* 1 */
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

/* 
    Validando la informacion del Form

  1.- Como requerimos de ambos valore de los select, debemos validar que me pasen esos valores
      para poder "cotizar", para eso contamos con la ayuda de onSubmit() dentro del "form", como 
      atributo y le pasamos una función 
  
  2.- Desarrollamos nuestro funcion y le decimos que nosotros contralaremos envio de la info (e.preventDefault())

  3.- Trabajamos con los estados que ya nos trae el Custom hook, y consultamos bajo un condicional si hay algo
      o no

  4.- Como no voy a trabajar con el "else", le envio un return vacio para que no lea mas codigo

  5.- Declaramos un estado, para que manejo de errores

  6.- Le ponemos el estado del error en "true" en caso que se cumpla la condición

  7.- Siguiendo con el caso que no se pase info en los select, debemos decirle al usuario algo.

  8.- Importamos el componente que mostrara la info, en caso de que error = "true"

  9.- Debemos colocar en false el error, en caso que si pase la validacion, o regrese de una validacion en true
*/