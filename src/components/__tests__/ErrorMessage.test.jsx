import ErrorMessage from "../ErrorMessage";
import { render, screen } from "@testing-library/react";

describe("testes do componente de mensagem de erro", () => {
  it("deve renderizar o componente", () => {
    render(<ErrorMessage />);
    expect(
      screen.getByText("Something went wrong... Please, try again.")
    ).toBeInTheDocument();
  });
});
