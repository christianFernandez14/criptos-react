/* 1 */
import { useState } from "react";
import styled from "@emotion/styled"

const Label = styled.label`
  color:#fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`
const useSelectMonedas = (label, opciones) => {

  /* 2 */
  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        /* 3 */
        value={state}
        /* 4 */
        onChange={e => setState(e.target.value)}
      >
        <option value="">- Seleccione -</option>
        {
          opciones.map(opcion => (
            <option
              key={opcion.id}
              value={opcion.id}
            >{opcion.nombre}</option>
          ))

        }
      </Select>
    </>
  )

  /* 5 */
  return [state, SelectMonedas]
}

export default useSelectMonedas

/* 
    Trabajando con el State de React (useState / useEffect) 

    Lo bueno de trabajar con custom hook, es que tambien puedes hacer uso de los hooks de react
    como useState y useEffect, para poder manejar tus estados.

  1.- Vamos importar el useState
  
  2.- Lo declaramos, tal como lo hamos en el los Componetes, y lo definimos con un nombre generico, porque
      la idea es que el hook (useSelectMoneda) sea re-utilizable, y lo declaramos o inicializamos vacio
  
  3.- El state, se lo pasamos como props al Select, y de esta manera la reutilizacion del select, va manejar su
      propio state
  
  4.- y al onChange, le pasamos el valor que vaya seleccionar el usuario

  5.- Como el state declarado solo vive en este hook, lo podemos poner a disposion dentro del array que
      retornamos


*/