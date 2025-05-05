import { useState, useEffect } from 'react';
import axios from 'axios';

const EXCHANGE_API = 'https://v6.exchangerate-api.com/v6/…/latest/USD';

export function useExchangeRates(targetCurrency) {
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (targetCurrency === 'USD') return; 
    setLoading(true);
    axios.get(EXCHANGE_API)
      .then(resp => {
        setRate(resp.data.conversion_rates[targetCurrency] || 1);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [targetCurrency]);

  return { rate, loading, error };
}
