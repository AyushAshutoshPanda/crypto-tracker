import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updateAssets } from './cryptoSlice';
import { simulateCryptoUpdates } from '../../utils/simulateUpdates';

const CryptoTable = () => {
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = simulateCryptoUpdates(assets);
      dispatch(updateAssets(updated));
    }, 1500);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">📈 Real-Time Crypto Tracker</h1>
      <div className="overflow-x-auto">
        <table className="crypto-table w-full text-sm">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset.id}>
                <td>
                  <img src={asset.logo} alt={asset.name} width="28" height="28" />
                </td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td className={asset.change_1h >= 0 ? 'positive' : 'negative'}>
                  {asset.change_1h}%
                </td>
                <td className={asset.change_24h >= 0 ? 'positive' : 'negative'}>
                  {asset.change_24h}%
                </td>
                <td className={asset.change_7d >= 0 ? 'positive' : 'negative'}>
                  {asset.change_7d}%
                </td>
                <td>${asset.market_cap.toLocaleString()}</td>
                <td>${asset.price.toLocaleString()}</td>
                <td>${asset.volume_24h.toLocaleString()}</td>
                <td>{asset.circulating_supply.toLocaleString()}</td>
                <td>{asset.max_supply.toLocaleString()}</td>
                <td>
                  <img
                    src={asset.chart_7d}
                    alt={`${asset.name} 7D Chart`}
                    className="chart-img"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
