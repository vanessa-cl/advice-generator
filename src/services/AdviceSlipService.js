class AdviceSlipService {
  baseUrl = "https://api.adviceslip.com";

  /**
   *
   * @returns um objeto com um conselho aleatório e o respectivo id
   */

  async getRandomAdvice() {
    return fetch(`${this.baseUrl}/advice`);
  }
}

export const adviceSlipService = new AdviceSlipService();
