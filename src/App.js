import React from 'react';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
