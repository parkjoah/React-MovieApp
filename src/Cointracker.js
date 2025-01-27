import { useEffect, useState } from "react";

function Cointracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}):${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default Cointracker;
