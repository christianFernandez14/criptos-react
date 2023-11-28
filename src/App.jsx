import styled from '@emotion/styled'
/* 2 */
import imagenCripto from './img/imagen-criptos.png'

/* 1 */
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
/* 3 */
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`


const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {


  return (
    <>
      <Contenedor>
        {/* 4 */}
        <Imagen
          src={imagenCripto}
          alt="Imagen de las criptos monedas"
        />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
        </div>
      </Contenedor>
    </>
  )
}

export default App

/* 
    Seguimos con el Styled Components:

1.- Agregamos un contenedor, que va ha tener todo el App.

2.- Importamos la imagen que tenemos en nuestro proyecto, al ser una imagen puede importarla con el nombre que desees

3.- Creamos styled, a la imagen importada en este componente.

4.- Luego de haberse compilado el styled del img, se lo pasamos al componente para renderizarlo, como estamos trabajando
    con img, debe incorporarle los atributos src(fuente de la imagen) y alt (texto alternitivo), ambos son obligatorios.

5.- Ahora no todas etiquetas van a llevar estilos, en este caso envolvimos el Heading, dentro de un div, ya que vamos agrupar
    lo que este ahi como un segundo lote de componentes, gracias a grid, que tenemos en el Contenedor (Styled.div)

    "Existe un extension para ver los autocompletados de los Styled components:  vscode-styled-components"

*/
