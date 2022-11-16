import React from "react";

export default function Joke({ setup, punchline }) {
  /**
    * Challenge:
    * - Create state `isShown` (boolean, default to `false`)
    * - Add a button that toggles the value back and forth
  */
  const [isShown, setIsShown] = React.useState(false)
  console.log(isShown);

  const toggle = () => {
    setIsShown(prevState => !prevState);
  }

  return (
    <section className=''>
      <div className='joke__card'>
        {setup && <p>{setup}</p>}
        <p>
          <b>{punchline}</b>
        </p>
        <button onClick={toggle}>Show / Hide</button>
      </div>
    </section>
  );
}
