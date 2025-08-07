import { useEffect, useState } from "react";

export function useSearchCities(inputValue) {
  const [result, setResult] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      if (!inputValue || inputValue.length < 3) return;
      try {
        console.log("api");
        const response = await fetch(`${apiUrl}?q=${inputValue}&key=${apiKey}`);
        const data = await response.json();
        const formatted = data.results.map((el) => el.formatted);
        setResult(formatted);
      } catch (err) {
        console.log("error:", err);
      }
    }
    fetchData();
  }, [inputValue]);

  return result;
}
