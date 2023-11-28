# PROYECTO CRIPTOMONEDAS

1.- Vamos a crear nuestro propio Hooks
2.- Como focus Css: Styled Components
3.- Consumir info desde un Api

Inciando el Proyecto:

1.- Ubicas el lugar donde arrancara tu proyecto
2.- Desde tu bash, powershel, cmd o terminal de VisualScode: 
    => npm init vite@latest (tampien puedes ejecutar nom create vite@latest)
    => Nombre del proyecto
    => le das la opcion de React (ya que hay otroas librerias o frameworks con que trabaja Vite tambien)
    => Luego a JavaScrip
    => Luego le das cd nombre_del_proyecto
    => npm i (para que instale las dependecias -node_modules)
    => npm run dev (para levantar en proyecto en el puerto que te indico)

VAMOS CON ALGO DE TEORIA:

=> Que son los Styled Components: Es un comportamiento muy parecido de los Componentes que venimos trabajando, pero en esta oportunidad
                                  el desarrollo interno no sera html, sino CSS, y en vez de tener una hoja de estilo general o global
                                  se agrega estilo a cada componente que vayas creando, en resumen un enfonce distinto para aplicar
                                  CSS
   
   => Ventajas: Si no requieres mas de un componente, puedes eliminarlo junto a su CSS
                Sigues teniendo la posibilidad de re-utilizar codigo CSS

   => Sintaxis: Una vez compilado, la etiqueta que definiste en styled (debe ser etiquetas reales de html), es que se mostrara
                No usa llaves ni parentesis, usas la templates string (Backtick), para definir el CSS
                 
                 Ej:
                               const Heading = styled.h1`
                                  font-size: 2em;
                                  text-transform: uppercase;                 
                               `
                               <Heading>Nuestros Productos</Heading>
                               
                Y como ves dentro de las Backtick es CSS puro, el mismo que vienes trabajando en tu hojas de estilos
        

   => Como lo usamos: Para ello debemos instalar alguna dependencias al proyecto (npm i @emotion/react @emotion/styled)

   VAMOS CON ALGO DE TEORIA:

   => Por que trabajar con Custom Hooks: Una de las principales razones es para poder reutilizar una función.
                                         Puedes claro usar funciones Helper.
                                         Pero con el Custom hook, puedes manejar tambien el State y manetener
                                         su forma persistente.
                                         Todo React integrado (state, effect, otros hooks y performance).
                                         Sera re-utilizable no solo aca en este proyecto sino en otros tambien.

  => Como lo reconoces: Viene compuesto por la palabra "use", antes del nombre que le vayas a dar al hook
                        Debe estar en una carpeta de nombre hook, dentro de /SRC.

  => Su composicion es muy similar al de un componente, solo que lo que retorna es un array o un objeto.

  