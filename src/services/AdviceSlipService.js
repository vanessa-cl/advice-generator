class AdviceSlipService {
  baseUrl = "https://api.adviceslip.com";

  /**
   *
   * @returns um objeto com um conselho aleatório e o respectivo id
   */

  async getRandomAdvice() {
    return fetch(`${this.baseUrl}/advice`).then((response) => response.json());
  }

  /**
   *
   * @param {string} query
   * @returns um array de resultados da busca por advice
   */

  async searchAdviceByQuery(query) {
    return fetch(`${this.baseUrl}/advice/search/${query}`).then((response) =>
      response.json()
    );
  }
}

export const adviceSlipService = new AdviceSlipService();
