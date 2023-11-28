import styled from "@emotion/styled"

/* 4 */
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
/* 1 */
const Formulario = () => {
  return (
    /* 2 */
    <form>
      {/* 3 */}
      <InputSubmit
        type="submit"
        value='cotizar'
      />
    </form>
  )
}

export default Formulario

/* 
    Trabajando con el componente

  1.- Creamos la estructura del componente Formulario.jsx con el Snippet rafce.
  2.- Vamos a retornar un <form>
  3.- Creamos un boton (input de tipo submit)
  4.- Comenzamos a darle estilos al input.
  5.- Sustituimos el input nativo por el styled componente del input.




*/