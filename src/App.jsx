import Joke from './Joke/Joke';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Joke setup='setup1' punchline='punchline1' />
      <Joke setup='setup2' punchline='punchline2' />
      <Joke setup='setup3' punchline='punchline3' />
      <Joke setup='setup4' punchline='punchline4' />
      <Joke setup='setup5' punchline='punchline5' />
    </div>
  );
}

export default App;
