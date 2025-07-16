import React from "react";
import '../stylesheets/Proyectos.css'

function Proyectos(props) {
  return(
    <div className="Contenedor-Proyectos">

      <img 
      className="Imagen-Proyectos" 
      src={require(`../images/Proyecto-${props.Imagen}.png`)}
      alt="Imagen del 1 proyecto" 
      />

    <div className="Contenedor-Texto-Proyectos">

      <p className="Titulo-Proyectos">{props.NombreProyecto}</p>
      <p className="Herramientas-usadas">{props.HerramientasUsadas}</p>
      <p className="Descripcion_Proyecto">{props.DescripcionProyecto}</p>
    </div>

    </div>
  )
}

export default Proyectos;