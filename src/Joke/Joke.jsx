export default function Joke({ setup, punchline }) {
  return (
    <section className=''>
      <div className='joke__card'>
        <p>Hi, I'm a joke!</p>
        <p>This is a setup: {setup}</p>
        <p>This is a setup: {punchline}</p>
      </div>
    </section>
  );
}
