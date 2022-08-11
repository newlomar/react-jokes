export default function Joke({ setup, punchline }) {
  return (
    <section className='jokeCard'>
      <p>Hi, I'm a joke!</p>
      <p>This is a setup: {setup}</p>
      <p>This is a setup: {punchline}</p>
    </section>
  );
}
