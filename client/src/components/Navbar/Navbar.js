import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>React Crypto Market App</h1>
      <nav 
        style={{
          borderBottom: '1px solid',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/home">Home</Link> | {" "}
        <Link to="/trending-coins">Trending Coins</Link> | {" "}
        <Link to="/favorite-coins">Favorite Coins</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;