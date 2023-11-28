/* 1 */
import styled from '@emotion/styled'

/* 2 */
const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #fff;
`

function App() {


  return (
    /* 2 */
    <>
      {/* 3 */}
      <Heading>Desde App</Heading>
    </>
  )
}

export default App

/* 
    TRABAJANDO CON LOS PRIMEROS STYLED COMPONENTS

1.- Luego de haber instalado la dependencias, debemos importar de @emotion/styled, el styled.

2.- La definición del Styled, debe estar por fuera del componente, es decir antes de la funciónn componente.

3.- Remplazamos la etiqueta nativa (h1), por el styled component, recien creado (Heading)
*/
