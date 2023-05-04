import { useEffect, useState } from "react";
import DiceButton from "./DiceButton";
import { adviceSlipService } from "../services/AdviceSlipService";
import "./styles/Quote.css";
import pattern from "../assets/images/pattern-divider-desktop.svg";

export default function Quote() {
  const [slip, setSlip] = useState({});

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    return await adviceSlipService
      .getRandomAdvice()
      .then((response) => setSlip(response.slip))
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <div className="quote-container">
        <h1 className="quote-title">ADVICE #{slip?.id}</h1>
        <div className="quote-area">
          <p className="quote-text">&quot;{slip?.advice}&quot;</p>
        </div>
        <img className="pattern-divider" src={pattern} />
      </div>
      <div className="dice-button-container">
        <DiceButton getAdvice={getAdvice} />
      </div>
    </article>
  );
}
