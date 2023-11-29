import styled from "@emotion/styled"

/* 1 */
const Label = styled.label`
  color:#fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

/* 2 */
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`
const useSelectMonedas = (label, opciones) => {

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value="">- Seleccione -</option>
        {
          /* 2 */
          opciones.map(opcion => (
            <option
              /* 3 */
              key={opcion.id}
              /* 4 */
              value={opcion.id}
            /* 5 */
            >{opcion.nombre}</option>
          ))

        }
      </Select>
    </>
  )

  return [SelectMonedas]
}

export default useSelectMonedas

/* 
      Dandole estilos al label y el select

  1.- Modificando los estilos del label
  2.- dandole estilos al select


*/