import Quote from "../Quote";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  adviceSlipService,
  MOCK_ADVICE,
} from "../../services/AdviceSlipService";

describe("testes do componente principal", () => {
  it("deve renderizar o componente", async () => {
    jest
      .spyOn(adviceSlipService, "getRandomAdvice")
      .mockResolvedValue(MOCK_ADVICE);
    await act(async () => render(<Quote />));
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("deve exibir um conselho", async () => {
    jest
      .spyOn(adviceSlipService, "getRandomAdvice")
      .mockResolvedValue(MOCK_ADVICE);

    await act(async () => render(<Quote />));
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("ADVICE #123");
      expect(
        screen.getByText(
          new RegExp(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ),
          "i"
        )
      ).toBeInTheDocument();
    });
  });

  it("deve exibir componente de erro", async () => {
    jest
      .spyOn(adviceSlipService, "getRandomAdvice")
      .mockRejectedValue({ message: "An error has occurred!" });

    await act(async () => render(<Quote />));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
      expect(
        screen.getByText("Something went wrong... Please, try again.")
      ).toBeInTheDocument();
    });
  });

  it("deve exibir o componente de carregamento", async () => {
    jest.spyOn(adviceSlipService, "getRandomAdvice");

    await act(async () => render(<Quote />));

    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  it("deve obter um novo conselho", async () => {
    jest
      .spyOn(adviceSlipService, "getRandomAdvice")
      .mockResolvedValue(MOCK_ADVICE);

    await act(async () => render(<Quote />));

    const diceButton = screen.getByRole("button", { name: "dice" });
    userEvent.click(diceButton);

    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("ADVICE #123");
      expect(
        screen.getByText(
          new RegExp(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ),
          "i"
        )
      ).toBeInTheDocument();
    });
  });
});
