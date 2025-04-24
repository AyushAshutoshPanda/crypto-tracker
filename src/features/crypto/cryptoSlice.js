import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../data/sampleCryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData
  },
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    }
  }
});

export const { updateAssets } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;
