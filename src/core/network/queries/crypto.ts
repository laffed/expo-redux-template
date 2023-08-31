type ExchangeRate = {
  id: string;
  symbol: string;
  currencySymbol: string;
  type: string;
  rateUsd: string;
}


type ExchangeRateRes = {
  data: ExchangeRate[];
}

const BASE_URL = 'https://api.coincap.io/v2';

export const getExchangeRates = {
  key: 'getExchangeRates',
  query: async () => {
    const response = await fetch(`${BASE_URL}/rates`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- correct
    const jres = await response.json() as ExchangeRateRes;

    return jres.data;
  },
} as const;
