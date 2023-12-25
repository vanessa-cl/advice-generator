export const MOCK_ADVICE = {
  slip: {
    id: 123,
    advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

class AdviceSlipService {
  baseUrl = "https://api.adviceslip.com";

  /**
   *
   * @returns um objeto com um conselho aleatório e o respectivo id
   */

  async getRandomAdvice() {
    return fetch(`${this.baseUrl}/advice`).then((response) => response.json());
  }
}

export const adviceSlipService = new AdviceSlipService();
