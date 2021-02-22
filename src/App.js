import './App.css';
import data from './data';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      {data.map(movie => <Movie 
      title={movie.title} 
      event={movie.event}
      takes_place={movie.takes_place}
      theatre={movie.theatre}
      length={movie.length}
      audio={movie.audio}
      awards={movie.awards}
      availability={movie.availability}
      ></Movie>)}
    </div>
  );
}

export default App;
