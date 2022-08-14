import Joke from './Joke/Joke';
import './App.css';
import jokes from './jokes.json';

function App() {
  const jokesArray = jokes.jokes;
  return (
    <div className='app'>
      {jokesArray.map((joke) => (
        <Joke key={joke.setup} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </div>
  );
}

export default App;
