import Joke from './Joke/Joke';
import './App.css';
import jokes from './jokes.json';

function App() {
  const jokesArray = jokes.jokes;
  return (
    <ul className='app'>
      {jokesArray.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </ul>
  );
}

export default App;
