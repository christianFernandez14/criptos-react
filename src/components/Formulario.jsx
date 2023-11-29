import useSelectMonedas from "../hooks/useSelectMonedas"

/* 1 */
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

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`
const Formulario = () => {

  /* 2 */
  const [SelectMonedas] = useSelectMonedas('Seleccione la Moneda', monedas);


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
      Trabajando con el segundo parametro del custom hook "useSelectMonedas" / Las opciones

  1.- Vamos a pasarle al primer hook declarado (SelectMonedas) unas opciones (array de objetos) en duro (hardcodeada), dentro de este mismo componente, y este seria el segundo parametro del Hook, esta estaran en un archivo aparte, para no ensuciar mucho el codigo y lo vamos importar en ese componente

  
  2.- Le pasamos el array de objetos (monedas) al hook, como segunda opcion

*/