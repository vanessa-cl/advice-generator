import dice from "../assets/images/icon-dice.svg";
import "./styles/DiceButton.css";

export default function DiceButton(props) {
  return (
    <button className="dice-button" onClick={props.getAdvice}>
      <img src={dice} alt="dice" />
    </button>
  );
}
