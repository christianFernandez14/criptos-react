/* 3 */
import styled from "@emotion/styled"

/* 4 */
const Label = styled.label`
  color:#fff;
`

/* 2 */
const useSelectMonedas = (label) => {

  /* 1 */
  const SelectMonedas = () => (
    <>
      {/* 5 */}
      <Label>{label}</Label>
    </>
  )

  return [SelectMonedas]
}

export default useSelectMonedas

/* 
    Tranajando con el custom hook "useSelectMonedas", como componente

  1.- La funcion original mandamos retornar un rederizado es decir con parentesis.
  2.- Le paso por parametros lo que me esta enviando el hook desde el componente Formulario.jsx, y lo defino como "label"
  3.- Importamos syled components, para darle un estilo basico al label que recien acabo de recibir del componente Formulario.jsx
  4.- Defino una estructura basica de CSS, solo para ver bien el contenido.
  5.- Sustituyo el label nativo por el que recien estilce con el Styled components


*/