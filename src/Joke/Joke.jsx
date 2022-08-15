export default function Joke({ setup, punchline }) {
  return (
    <section className=''>
      <div className='joke__card'>
        {setup ? <p>{setup}</p> : ''}
        <p>
          <b>{punchline}</b>
        </p>
      </div>
    </section>
  );
}
