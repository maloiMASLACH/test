export const columnTitles: { [key: string]: string } = {
  collection: 'Collection',
  volume: 'Volume',
  dailyPercent: '24h %',
  weekPercent: '7d %',
  floorPrice: 'Floor Price',
  items: 'Items'
};

export const adaptiveColumns: string[] = ['collection', 'dailyPercent', 'floorPrice'];

export const rowTitles: RowTitles[] = [
  {
    id: '1',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '2',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '-65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '3',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '4',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '5',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '6',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '7',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '8',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '9',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  },
  {
    id: '10',
    collection: 'NeoTokyo Outer Identities',
    volume: '12 059,65',
    dailyPercent: '-78.67%',
    weekPercent: '+65.40%',
    floorPrice: '51.99',
    items: '10.0K'
  }
];

export interface RowTitles {
  [key: string]: string;
  id: string;
  collection: string;
  volume: string;
  dailyPercent: string;
  weekPercent: string;
  floorPrice: string;
  items: string;
}
