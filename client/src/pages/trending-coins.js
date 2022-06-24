import React from 'react';
import CoinContainer from '../components/CoinContainer/CoinContainer';
// import TrendingCard from '../components/TrendingCard/TrendingCard';

function TrendingCoinsPage(props) {
  console.log("Trending:", props.trendingData[0])
  // const getTrendingCoin = (data) => { return data.items.coins };
  return (
    <div className='App'>
      <h2>Trending Coins</h2>
      
    </div>
  );
}

export default TrendingCoinsPage;