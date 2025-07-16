
import './App.css';
import Proyectos from './components/Proyectos.jsx';

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
      <Proyectos
      Imagen="SantosWeed" 
      NombreProyecto="SantosWeed"
      HerramientasUsadas="Herramientas del Segundo Proyecto"
      DescripcionProyecto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor enim sit amet massa bibendum gravida. Proin vehicula odio sit amet massa tincidunt congue. Suspendisse eu sapien gravida, aliquet nibh ac, auctor magna. Morbi porta sem ut mauris iaculis dictum. Nullam congue ligula eu feugiat laoreet. Duis enim ex, condimentum vel turpis sit amet, dictum cursus magna. Sed urna lorem, pharetra non elit ac, cursus bibendum metus. Quisque nec aliquam eros.."
      />


      </div>
  );
}

export default App;
