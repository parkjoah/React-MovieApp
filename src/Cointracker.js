import { useEffect, useState } from "react";

function Cointracker() {
  const [loading, serLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers");
  }, []);
  return (
    <div>
      <h1>The coins!</h1>
      {loading ? <strong>loading</strong> : null}
    </div>
  );
}

export default Cointracker;
