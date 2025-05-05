import { useState, useEffect } from 'react';
import axios from 'axios';

const EXCHANGE_API = 'https://v6.exchangerate-api.com/v6/ef67c58770a7c53157c7fecc/latest/USD';

export function useAllExchangeRates() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get(EXCHANGE_API)
      .then((resp) => {
        if (isMounted) {
          setRates(resp.data.conversion_rates || {});
        }
      })
      .catch((err) => {
        console.error('Failed to fetch exchange rates:', err);
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false; };
  }, []);

  return { rates, loading, error };
}
