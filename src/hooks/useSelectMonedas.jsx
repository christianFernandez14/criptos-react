import styled from "@emotion/styled"

const Label = styled.label`
  color:#fff;
`
/* 1 */
const useSelectMonedas = (label, opciones) => {

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Seleccione...</option>
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
      </select>
    </>
  )

  return [SelectMonedas]
}

export default useSelectMonedas

/* 
      Trabajando con el segundo parametro del custom hook "useSelectMonedas" / Las opciones

  1.- Recibimos del componente Formulario.jsx, las opciones (moenedas), 
  2.- La vamos a renderizar dentro de un <select>, recuerda que para renderizar o mostrar usamos el metodo .map()
  3.- Cuando mapiamos, recuerda colocar la key, en este cado le daremos de Key, el id del objeto
  4.- Y el value que evaluara sera el mismo id y es lo que se va almacenar en el State.
  5.- Y lo que vera el usuario es lo que esta dentro de la propiedad de nombre.


*/