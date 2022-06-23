import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import ReactDOM from 'react-dom/client';
import { 
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './pages/home'; 
import TrendingCoins from './pages/trending-coins';
import FavoriteCoins from './pages/favorite-coins';


function App() {

  const [trendingData, setTrendingData] = useState([])

  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/search/trending', {
        headers: {
            Accept: "application/json"
        }
    })
    .then((r) => r.json())
    .then((data) => {
      setTrendingData(data.coins)
      console.log(data.coins);
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
    </div>
  );
}

export default App;
