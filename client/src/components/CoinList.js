import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Rank #', width: 70 },
  { field: 'coinName', headerName: 'Coin', width: 130 },
  { field: 'coinSymbol', headerName: 'Symbol', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 130,
  },
  {
    field: 'mktcap',
    headerName: 'Market Cap',
    type: 'number',
    width: 130,
  },
];

const rows = [
  { id: 1, coinName: 'Bitcoin', coinSymbol: 'BTC', price: 35, mktcap: 10 },
  { id: 2, coinName: 'Etherium', coinSymbol: 'ETH', price: 42, mktcap: 10 },
  { id: 3, coinName: 'Apecoin', coinSymbol: 'APE', price: 45, mktcap: 10 },
  { id: 4, coinName: 'Dodge', coinSymbol: 'Dodge', price: 16, mktcap: 10 },
  { id: 5, coinName: 'Terra', coinSymbol: 'Tera', price: 21, mktcap: 10 },
  { id: 6, coinName: 'Eth classic', coinSymbol: 'ETHC', price: 150, mktcap: 10 },
  { id: 7, coinName: 'Frances', coinSymbol: 'Rossini', price: 36, mktcap: 10 },
  { id: 9, coinName: 'Roxie', coinSymbol: 'Harvey', price: 65, mktcap: 10 },
]

function CoinList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}


export default CoinList;