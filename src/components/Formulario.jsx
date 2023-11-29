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

  /* 1 */
  const [monedas, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);


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
      Trabajando con el State de React (useState / useEffect) desde useSelectMonedas

  1.- Le pasamos el estado al useSelctMonedas y lo nombramos como monedas, recuerda como es un array destructiring
      el toma el valor por la posicion en que se encuentra en el array, es decir por el indice y si revisas el 
      "useSelectMonedas", estas retornando esto [state, SelectMoneda] (su estado y la funcion que lo modifica)
  
      Y de esa manera ya esta disponible state, para usuarlo en este componente, renderizar lo que tenga el state

*/