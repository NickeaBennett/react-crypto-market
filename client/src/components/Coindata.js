import React, { useEffect, useState } from 'react'
// Fetch all coins with market data
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'

function CoinData() {
    const [coin, setCoin] = useState(null)

    useEffect(() => {

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y', {

            headers: {
                Accept: "application/json"
            }
        })

        .then(r => r.json())
        console.log(r)
        .then(data => console.log(data))
        console.log(data)

    }, []);

    console.log(data)


  return (
    <>
        <h2>Coindata</h2>

    </>
  )
}

export default CoinData;