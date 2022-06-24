import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
// import CardContainer from './components/CardContainer/CardContainer';
// import ReactDOM from 'react-dom/client';
import { 
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './pages/home'; 
import TrendingCoins from './pages/trending-coins';
import FavoriteCoins from './pages/favorite-coins';
// import CoinContainer from './components/CoinContainer/CoinContainer';


function App() {

  const [trendingData, setTrendingData] = useState({});
  // const [coinData, setCoinData] = useState({});
  
  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/search/trending', {
        headers: {
            Accept: "application/json"
        }
    })
    .then((r) => r.json())
    .then((data) => {
      setTrendingData({...data})
    })
    .catch((err) => console.log(err) )
    
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="trending-coins" element={<TrendingCoins />} />
        <Route path="favorite-coins" element={<FavoriteCoins />} />
      </Routes>
      {/* <CoinContainer trendingData={trendingData} /> */}
    </div>
  );
}

export default App;
