import Joke from './Joke/Joke';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Joke
        setup='I got my son a fridge for his birthday'
        punchline={"I can't wait to see her face light up when she opens it"}
      />
      <Joke
        setup='How did the hacker escape the police?'
        punchline='He just ransomware!'
      />
      <Joke
        setup={"Why don't pirates travel on mountain roads?"}
        punchline='Scurvy.'
      />
      <Joke
        setup='Why do bees stay in the hive in the winter?'
        punchline='Swarm.'
      />
      <Joke
        setup={"What's the best thing about Switzerland?"}
        punchline={"I don't know, but the flag is a big plus!"}
      />
    </div>
  );
}

export default App;
