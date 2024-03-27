async function hideWalletSafely(walletSigner) {
  try {
    await ethos.hideWallet(walletSigner);
    console.log('Wallet hidden');
  } catch (err) {
    console.error('Error hiding wallet:', err);
  }
}

// Usage
hideWalletSafely(walletSigner);
