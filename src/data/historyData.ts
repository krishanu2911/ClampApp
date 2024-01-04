export interface indexCompositionInterface {
  indexName: string;
  value: number;
}

export interface HistoryItemProps {
  hashNumber: string;
  transactionType: 'Deposit' | 'Swap';
  tokenName: string;
  composition: indexCompositionInterface[];
  age: string;
}

export const historyData: HistoryItemProps[] = [
  {
    hashNumber: '0x8123...6a8e',
    transactionType: 'Deposit',
    tokenName: 'WETH-DAI-WBTC',
    age: '10 second ago',
    composition: [
      {indexName: 'WETH', value: 234332},
      {indexName: 'DAI', value: 211332},
    ],
  },
  {
    hashNumber: '0x1343...258a',
    transactionType: 'Deposit',
    tokenName: 'WETH-WBTC',
    age: '5 minutes ago',
    composition: [
      {indexName: 'WETH', value: 234332},
    ],
  },
];
