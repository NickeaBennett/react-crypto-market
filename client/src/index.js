import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from 'react-router-dom';
import App from './App';
import Home from './pages/home'; 
import TrendingCoins from './pages/trending-coins';
import FavoriteCoins from './pages/favorite-coins';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="trending-coins" element={<TrendingCoins />} />
        <Route path="favorite-coins" element={<FavoriteCoins />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
