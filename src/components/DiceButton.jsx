import dice from "../assets/images/icon-dice.svg";
import "./styles/DiceButton.css";

export default function DiceButton(props) {
  return (
    <button
      id="get-advice-button"
      name="Get Advice"
      className="dice-button"
      onClick={props.getAdvice}
    >
      <img width="24px" height="24px" src={dice} alt="dice" />
    </button>
  );
}
