import React, { useEffect, useState} from 'react';
import TrendingCoins from '../../../pages/trending-coins';

const API_URL = 'https://api.coingecko.com/api/v3/search/trending';

function TrendingData() {
  const [trendingData, setTrendingData] = useState([])

  useEffect(() => {
      fetch(API_URL, {
        headers: {
            Accept: "application/json"
        }
    })
    .then((r) => r.json())
    .then((data) => {
      setTrendingData(data.coins)
      console.log(trendingData)
    });
  }, []); 

  // const getTrendingCoin = (data) => { return data.items.coins };
 
  return (
    <div className='App'>
      <h2>Trending Data</h2>
      
    </div>
  );
}

export default TrendingData;