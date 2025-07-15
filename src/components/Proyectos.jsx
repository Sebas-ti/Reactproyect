import React from "react";
import '../stylesheets/Proyectos.css'

function Proyectos() {
  return(
    <div className="Contenedor-Proyectos">

      <img 
      className="Imagen-Proyectos" 
      src={require("../images/Proyecto-ganadero.png")}
      alt="Imagen del 1 proyecto" 
      />

    <div className="Contenedor-Texto-Proyectos">

      <p className="Titulo-Proyectos">Gestion Ganadera "Animal Management"</p>
      <p className="Herramientos-usadas">HTML,CSS,JavaScript,Bootstrap,PHP,MariaBD y XAMPP</p>
      <p className="Descripcion_Proyecto">Lorem ipsum dolor sit amet consectetur adipiscing elit nec cum dictumst nulla vehicula morbi est magna, nam enim nullam primis aliquet maecenas hendrerit class venenatis curae nibh vivamus proin. Mauris habitasse sed class nam justo mollis, id purus accumsan consequat etiam. Proin vehicula urna egestas lectus eros felis tortor at, id elementum facilisi mus hac eleifend nibh, venenatis mauris ac fringilla volutpat sapien iaculis.</p>
    </div>

    </div>
  )
}

export default Proyectos;