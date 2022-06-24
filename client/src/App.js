import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
// import ReactDOM from 'react-dom/client';
import { 
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './pages/home'; 
import TrendingCoinsPage from './pages/trending-coins';
import FavoriteCoins from './pages/favorite-coins';
// import CoinContainer from './components/CoinContainer/CoinContainer';

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
      setTrendingData({...data.coins})
    })
    .catch((err) => console.log(err) )
    
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="trending-coins" element={<TrendingCoinsPage trendingData={trendingData} />} />
        <Route path="favorite-coins" element={<FavoriteCoins />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
