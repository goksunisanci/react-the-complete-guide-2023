import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState("")

  const clickHandler = () => {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
