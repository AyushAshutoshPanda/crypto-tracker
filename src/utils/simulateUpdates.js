export function simulateCryptoUpdates(assets) {
    return assets.map(asset => {
      const randFactor = (Math.random() * 2 - 1).toFixed(2);
      const updatedPrice = (asset.price * (1 + randFactor / 100)).toFixed(2);
      const updatedChange1h = (parseFloat(asset.change_1h) + parseFloat(randFactor)).toFixed(2);
      const updatedChange24h = (parseFloat(asset.change_24h) + parseFloat(randFactor)).toFixed(2);
      const updatedChange7d = (parseFloat(asset.change_7d) + parseFloat(randFactor)).toFixed(2);
      const updatedVolume = asset.volume_24h + Math.floor(Math.random() * 100000);
  
      return {
        ...asset,
        price: parseFloat(updatedPrice),
        change_1h: parseFloat(updatedChange1h),
        change_24h: parseFloat(updatedChange24h),
        change_7d: parseFloat(updatedChange7d),
        volume_24h: updatedVolume
      };
    });
  }
  