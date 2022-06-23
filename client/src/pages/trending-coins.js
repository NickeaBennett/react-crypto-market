import React, { useEffect, useState} from 'react';
import TrendingList from '../components/coindata/trendingdata/TrendingList';

const API_URL = 'https://api.coingecko.com/api/v3/search/trending';

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([])

  useEffect(() => {
      fetch(API_URL, {
        headers: {
            Accept: "application/json"
        }
    })
    .then((r) => r.json())
    .then((data) => {
      setTrendingCoins(data.coins)
      console.log(data.coins)
    });
  }, []); 

  // const getTrendingCoin = (data) => { return data.items.coins };
 
  return (
    <div className='App'>
      <h2>Trending Coins</h2>
        <TrendingList />
      
    </div>
  );
}

export default TrendingCoins;