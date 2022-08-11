export default function Joke({ setup, punchline }) {
  return (
    <section className=''>
      <div className='joke__card'>
        <p>{setup}</p>
        <p>{punchline}</p>
      </div>
    </section>
  );
}
