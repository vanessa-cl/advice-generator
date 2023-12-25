import DiceButton from "../DiceButton";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const MOCK_GET_ADVICE = jest.fn();

describe("testes do componente de botão", () => {
  it("deve renderizar o componente", () => {
    render(<DiceButton getAdvice={MOCK_GET_ADVICE} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("deve chamar função que traz um conselho", async () => {
    render(<DiceButton getAdvice={MOCK_GET_ADVICE} />);
    const diceButton = screen.getByRole("button");
    await act(async () => userEvent.click(diceButton));
    expect(MOCK_GET_ADVICE).toHaveBeenCalled();
  });
});
