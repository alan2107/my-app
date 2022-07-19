import './App.css';
import Testimonio from './componentes/testimonio'; // importar el archivo testimonio a la app principal

function App() {
  return (
    <div className="App">
      <div clasName='contenedor-Principal'>
        <h1>Esto es lo que dicen nuestros alumnos de freeCodeCamp:</h1>
        <Testimonio
          nombre='hernan'
          pais='singapur'
          cargo='Ingeniero de software'
          imagen='hernan'
          empresa='Amazon'
          Testimonio='Da miedo cambiar de carrera. Solo gane la confianza con freeCodeCamp, y ahora estoy un nivel superior a lo que yo era antes' />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de software'
          empresa='Spotify'
          Testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp me dio las habilidades y la confianza que necessitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify ' />
        <Testimonio
          nombre='Ana'
          pais='Nigeria'
          cargo='Ingeniera de software'
          imagen='ana'
          empresa='ChatDesk'
          Testimonio='es muy bueno freeCodeCamp, me cabio totalmente la vida. siempre soñe trabajar remoto y poder hacer mis otras actividades, sin que me demande mucho el trabajo' />
      </div>
    </div>
  );
}

export default App;
