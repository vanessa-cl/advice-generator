import { useState } from "react";
import DiceButton from "./DiceButton";
import "./styles/Quote.css";
import pattern from "../assets/images/pattern-divider-desktop.svg";

export default function Quote() {
  const [advice, setAdvice] = useState({
    id: 123,
    slip: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  return (
    <article>
      <div className="quote-container">
        <h1 className="quote-title">ADVICE #{advice.id}</h1>
        <p className="quote-text">&quot;{advice.slip}&quot;</p>
        <img className="pattern-divider" src={pattern} />
      </div>
      <div className="dice-button-container">
        <DiceButton />
      </div>
    </article>
  );
}
