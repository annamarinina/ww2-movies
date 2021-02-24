import './App.css';
import data from './data';
import Hitler_Rise_of_Evil from './images/Hitler The Rise of Evil.jpg';
import The_Gathering_Storm from './images/The Gathering Storm 2002.jpg'
import The_Kings_Speech from './images/The Kings Speech.jpg';
import City_of_Life_and_Death from './images/City of Life and Death 2009.jpg';
import April_9 from './images/9 April 2015.jpg';
import The_Kings_Choice from './images/The Kings Choice 2016.jpg';
import Into_the_White from './images/Into The White 2013.jpg';
import Dunkirk from './images/Dunkirk 2017.jpg';
import Darkest_Hour from './images/Darkest Hour 2017.jpg';
import Battle_of_Britain from './images/Battle of Britain 1969.jpg';
import Fateless from './images/Fateless 2005.jpg';
import Suite_Francaise from './images/Suite Francaise 2014.jpg';
import Generation_War from './images/Generation War Episode 1.jpg';
import Fortress_of_War from './images/Fortress of War 2010.jpg';
import Casablanca from './images/Casablanca 1942.jpg';
import Pearl_Harbor from './images/Pearl Harbor 2001.jpg';
import Conspiracy from './images/Conspiracy 2001.jpg';
import Anthropoid from './images/Anthropoid 2016.jpg';
import Battle_for_Sevastopol from './images/Battle for Sevastopol 2015.jpg';
import Midway from './images/Midway 1976.jpg';
import Lust_Caution from './images/Lust Caution 2007.jpg';
import Pacific_I from './images/The Pacific Episode I.jpg';
import Pacific_II from './images/The Pacific Episode II.jpg';
import Thin_Red_Line from './images/The Thin Red Line 1998.jpg';
import Pacific_III from './images/The Pacific Episode III.jpg';
import Stalingrad from './images/Stalingrad 2013.jpg';
import Uprising from './images/Uprising 2001.jpg';

import Movie from './components/Movie'

function App() {

  const images = [
    Hitler_Rise_of_Evil,
    The_Gathering_Storm,
    The_Kings_Speech,
    City_of_Life_and_Death,
    April_9,
    The_Kings_Choice,
    Into_the_White,
    Dunkirk,
    Darkest_Hour,
    Battle_of_Britain,
    Fateless,
    Suite_Francaise,
    Generation_War,
    Fortress_of_War,
    Casablanca,
    Pearl_Harbor,
    Conspiracy,
    Anthropoid,
    Battle_for_Sevastopol,
    Midway,
    Lust_Caution,
    Pacific_I,
    Pacific_II,
    Thin_Red_Line,
    Pacific_III,
    Stalingrad,
    Uprising
  ]

  return (
    <div className="App">
      <div className="movies">
      {data.map((movie, index) => <Movie 
      title={movie.title} 
      event={movie.event}
      takes_place={movie.takes_place}
      theatre={movie.theatre}
      length={movie.length}
      audio={movie.audio}
      awards={movie.awards}
      availability={movie.availability}
      img_src={images[index]}
      ></Movie>)}
    </div>
    </div>
  );
}

export default App;
