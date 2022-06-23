import React from 'react';
import TrendingList from '../components/coindata/TrendingList';

function TrendingCoins() {
  // const getTrendingCoin = (data) => { return data.items.coins };
  return (
    <div className='App'>
      <h2>Trending Coins</h2>
        <TrendingList />
    </div>
  );
}

export default TrendingCoins;