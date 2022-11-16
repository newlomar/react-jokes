import React from "react";

export default function Joke({ setup, punchline }) {
  /**
    * Challenge:
    * - Only display the punchline paragraph if `isShown` is true
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
          {isShown && <b>{punchline}</b>}
        </p>
        <button onClick={toggle}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
      </div>
    </section>
  );
}
