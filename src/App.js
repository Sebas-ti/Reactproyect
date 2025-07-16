
import './App.css';
import Proyectos from './components/Proyectos.jsx';
import YouTube from './components/YouTube.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Mi portafolio </h1>
      </div>
      <Proyectos
      Imagen="ganadero"
      NombreProyecto="Animal Management"
      HerramientasUsadas="HTML,CSS,JavaScript,Bootstrap,PHP,Mysql Y Xampp"
      DescripcionProyecto="Este proyecto es un sistema de gestión ganadera desarrollado como una aplicación web. La plataforma ofrece información detallada sobre el software e incluye funcionalidades clave como registro de usuarios, inicio de sesión y recuperación de contraseña. Una vez autenticados, los usuarios acceden a un panel principal (dashboard) donde pueden registrar, modificar y eliminar información relacionada con los animales. Los datos gestionados abarcan aspectos como salud, inventarios, reproducción y administración de fincas"
      />

      <div className="video-wrapper-medium">
      <YouTube videoId="OcrRNf3yQHk" title="Un video de ejemplo diferente" />
      </div>

      <Proyectos
      Imagen="Goallish" 
      NombreProyecto="Goallish"
      HerramientasUsadas="HTML,CSS,JavaScript,REACT,Tailwind,Python,Django Y PostgreSQL"
      DescripcionProyecto="Este software está diseñado para optimizar y digitalizar todas las operaciones de un restaurante, desde la cocina hasta la atención al cliente Las Funcionalidades principales son Gestión de Menús,Control de Inventario,Pedidos y Mesas,Facturación y Pagos,Gestión del Personal y Reportes y Análisis"
      />

      <div className="video-wrapper-medium">
      <YouTube videoId="OcrRNf3yQHk" title="Un video de ejemplo diferente" />
      </div>

      <Proyectos
      Imagen="SantosWeed" 
      NombreProyecto="SantosWeed"
      HerramientasUsadas="Herramientas del Segundo Proyecto"
      DescripcionProyecto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor enim sit amet massa bibendum gravida. Proin vehicula odio sit amet massa tincidunt congue. Suspendisse eu sapien gravida, aliquet nibh ac, auctor magna. Morbi porta sem ut mauris iaculis dictum. Nullam congue ligula eu feugiat laoreet. Duis enim ex, condimentum vel turpis sit amet, dictum cursus magna. Sed urna lorem, pharetra non elit ac, cursus bibendum metus. Quisque nec aliquam eros.."
      />

      <div className="video-wrapper-medium">
      <YouTube videoId="OcrRNf3yQHk" title="Un video de ejemplo diferente" />
      </div>

      </div>
  );
}

export default App;
