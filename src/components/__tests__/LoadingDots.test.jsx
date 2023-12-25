import LoadingDots from "../LoadingDots";
import { render, screen } from "@testing-library/react";

describe("testes do componente de carregamento", () => {
  it("deve renderizar o componente", () => {
    render(<LoadingDots />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
