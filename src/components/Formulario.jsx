/* 1 */
import useSelectMonedas from "../hooks/useSelectMonedas"
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
  /* 2 - 3 */
  const [SelectMonedas] = useSelectMonedas();

  /* 4 */
  SelectMonedas();
  
  return (
    <form>
      <InputSubmit
        type="submit"
        value='cotizar'
      />
    </form>
  )
}

export default Formulario

/* 
    Tranajando con el custom hook "useSelectMonedas"

  1.- Importamos el custom hook en este componente
  2.- Extraemos el valor que esta retornando, recuerda que como estas retornando un array en el hooh, extrae el valor por el indice
      podemos llamarlo aca con otro nombre, pero para fines practico lo dejamos con el mismo nombre.
  3.- Como todo los hook, van hasta arriba de la función del componente.
  4.- Y como lo que retornamos es una función la mandamos a llamar
*/