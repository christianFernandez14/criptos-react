/* 1 */
import styled from "@emotion/styled"


const Contenedor = styled.div`
  margin: 15px 0;
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ImagenCripto = styled.img`
  display: block;
  width: 150px;

`

const Texto = styled.p`
  font-size: 15px;
  margin: 10px 0;
  span{
    font-weight: 700;
  }

`

const Precio = styled.p`
  font-size: 25px;
  margin: 10px 0;
  span{
    font-weight: 700;
  }
`

const Cotizacion = ({ cotizacion }) => {
  // console.log(cotizacion)

  /* 3 */
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

  return (
    <Contenedor>
      <ImagenCripto
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>El Precio es: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima actulización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Cotizacion


/* 
    Componente que se encargara de llevar estructura de lo que se mostrara como resultado al 
    darle cotizar y este se renderizara en App.jsx

 1.- Le vamos a dar algo de estilos

 2.- Recibimos las props que me envia desde App

 3.- Luego de verificar que me estan llegando las props, tomos algunos valores de ese objeto y le hago
     destructuring


*/