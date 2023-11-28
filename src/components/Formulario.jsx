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
  /* 2 */
  const [SelectMonedas] = useSelectMonedas('Seleccione la Moneda');
  
  /* 3 */
  const [SelectOtraMonedas] = useSelectMonedas('Seleccione Otra moneda');

  return (
    <form>
      {/* 1 */}
      < SelectMonedas />

      {/* 4 */}
      < SelectOtraMonedas />

      <InputSubmit
        type="submit"
        value='cotizar'
      />
    </form>
  )
}

export default Formulario

/* 
      Tranajando con el custom hook "useSelectMonedas", como componente
  
  1.- Llamamos al hook, ahora como un componente, ya que asi lo definimos en archivo
  2.- Como todo hook debe tener un valor inicial, por lo tanto lo definimos, para evaluar los dos casos de label que vamos a trabajar
      en este proyecto, va estar como parametros del hook
  3.- Una de las gran ventajas de trabajar con tus propios custom hooks, es como lo definimos anteriormente, puedes reutilzarlo
      y ya logica existe en tu custom hook
  4.- Renderizamos esa nuevo label sin tanto esfuerzo
*/