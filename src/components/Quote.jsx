import { useEffect, useState } from "react";
import DiceButton from "./DiceButton";
import { adviceSlipService } from "../services/AdviceSlipService";
import "./styles/Quote.css";
import pattern from "../assets/images/pattern-divider-desktop.svg";
import LoadingDots from "./LoadingDots";
import ErrorMessage from "./ErrorMessage";

const INITIAL_SLIP_STATE = {
  id: null,
  advice: "",
};

export default function Quote() {
  const [slip, setSlip] = useState(INITIAL_SLIP_STATE);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    setSlip(INITIAL_SLIP_STATE);
    return await adviceSlipService
      .getRandomAdvice()
      .then((response) => {
        setSlip(response.slip);
        setShowErrorMessage(false);
      })
      .catch(() => setShowErrorMessage(true));
  };

  return (
    <article>
      <div className="quote-container">
        <h1 className="quote-title">ADVICE #{slip?.id}</h1>
        <div className="quote-area">
          {slip.advice ? (
            <p className="quote-text">&quot;{slip?.advice}&quot;</p>
          ) : (
            <LoadingDots />
          )}
        </div>
        <img className="pattern-divider" src={pattern} alt="pattern-divider" />
      </div>
      <div className="dice-button-container">
        <DiceButton getAdvice={getAdvice} />
      </div>
      {showErrorMessage ? <ErrorMessage /> : <></>}
    </article>
  );
}
