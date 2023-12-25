import { adviceSlipService, MOCK_ADVICE } from "../AdviceSlipService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => new Promise((resolve) => resolve(MOCK_ADVICE)),
  })
);

describe("testes do serviço de advice slip", () => {
  it("deve chamar método que traz um conselho aleatório", async () => {
    const expectedResponse = MOCK_ADVICE;
    jest.spyOn(adviceSlipService, "getRandomAdvice");
    const response = await adviceSlipService.getRandomAdvice();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(adviceSlipService.getRandomAdvice).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse);
  });
});
