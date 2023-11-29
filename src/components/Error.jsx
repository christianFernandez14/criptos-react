/* 3 */
import styled from "@emotion/styled"

/* 2 */
const Texto = styled.div`
background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;

`


const Error = ({ children }) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error

/* 
  Validando la informacion del Form

  1.- Componente creado, para incorporar la info en la validación del formulario.
  2.- Le damos algo de estilos
  3.- Debemos  importar el styled component

*/