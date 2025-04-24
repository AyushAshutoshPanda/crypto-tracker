# Real-Time Crypto Price Tracker

A real-time cryptocurrency price tracker built with **React** and **Redux Toolkit**, simulating live WebSocket updates. Inspired by platforms like CoinMarketCap.

---

## 🚀 Features

- Displays real-time price updates for 5 cryptocurrencies (BTC, ETH, etc.).
- Fully responsive table UI.
- Redux-managed global state.
- Mock WebSocket using `setInterval`.
- Color-coded percentage changes (green for positive, red for negative).
- Static 7-day chart (placeholder images).

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit
- **Mock Data**: Static JSON array
- **Simulated WebSocket**: setInterval
- **UI**: Tailwind CSS (optional but recommended)

---

## 📁 Folder Structure

```
crypto-price-tracker/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   └── store.js
│   ├── data/
│   │   └── sampleCryptoData.js
│   ├── features/
│   │   └── crypto/
│   │       ├── CryptoTable.js
│   │       └── cryptoSlice.js
│   ├── utils/
│   │   └── simulateUpdates.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── tailwind.config.js (optional)
└── README.md
```

---

## 🧪 How It Works

1. Initial mock data is loaded into Redux store.
2. A `setInterval` runs every 1.5 seconds to simulate price updates.
3. Redux actions dispatch updated values.
4. The table re-renders automatically using Redux selectors.

---

## 🧵 How to Run

```bash
# Clone the repo
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker

# Install dependencies
npm install

# Start the app
npm start
```

---

## 🎥 Demo

👉 [Watch Demo (Loom/YouTube)](https://example.com/demo)

Include a 2-5 min demo showing:
- App layout
- Simulated updates
- State flow
- Thought process

---

## ✅ Bonus Ideas

- Add real WebSocket from Binance or CoinCap.
- Sorting/filtering (Top gainers/losers).
- TypeScript support.
- LocalStorage for state persistence.
- Unit tests for reducers & selectors.

---

## 📄 License

MIT

---

Made with ❤️ by Ayush Ashutosh Panda

