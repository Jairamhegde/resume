import { useEffect, useState } from "react";
import { getPortfolio } from "../api/client.js";

export function usePortfolio() {
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    let cancelled = false;
    getPortfolio()
      .then((data) => !cancelled && setState({ data, error: null, loading: false }))
      .catch((error) => !cancelled && setState({ data: null, error, loading: false }));
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
