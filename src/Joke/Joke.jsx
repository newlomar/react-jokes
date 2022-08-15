export default function Joke({ key, setup, punchline }) {
  return (
    <section className='' key={key}>
      <div className='joke__card'>
        {setup ? <p>{setup}</p> : ''}
        <p>
          <b>{punchline}</b>
        </p>
      </div>
    </section>
  );
}
