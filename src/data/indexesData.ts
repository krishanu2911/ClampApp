interface indexesDataInterface {
  id: string;
  indexName: string;
  priceChange: number;
  currentPrice: number;
  profitLoss: number;
}

export const indexesData: indexesDataInterface[] = [
  {
    id: 'dbhuihiuewgbf',
    indexName: 'WETH-WBTC',
    priceChange: 2,
    currentPrice: 0.81,
    profitLoss: 0.39,
  },
  {
    id: 'sadfsdjnin',
    indexName: 'WETH-DAI-WBTC',
    priceChange: 1.7,
    currentPrice: 0.99,
    profitLoss: -0.11,
  },
];
