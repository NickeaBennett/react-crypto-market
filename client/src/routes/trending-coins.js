import React, { useEffect, useState} from 'react';

const API_URL = 'https://api.coingecko.com/api/v3/search/trending'

function TrendingCoins() {
  const [trendingCoin, setTrendingCoin] = useState(null)
  return (
    <div style={{ padding: '1rem 0' }}>
        <h2>Trending Coins</h2>
    </div>
  );
}

export default TrendingCoins;