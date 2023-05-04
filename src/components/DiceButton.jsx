import dice from "../assets/images/icon-dice.svg";
import "./styles/DiceButton.css";

export default function DiceButton() {
  return (
    <button className="dice-button">
      <img src={dice} />
    </button>
  );
}
