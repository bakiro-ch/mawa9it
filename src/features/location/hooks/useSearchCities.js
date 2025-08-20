import { useEffect, useState } from "react";

export function useSearchCities(inputValue) {
  const [result, setResult] = useState([]);
  // const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = "pk.60d535583e9f53faa9ae70530dd5bf3b";

  useEffect(() => {
    async function fetchData() {
      if (!inputValue || inputValue.length < 3) return;
      try {
        console.log("api");
        const response = await fetch(
          `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${inputValue}&limit=5&dedupe=1&`
        );
        const data = await response.json();
        const place = data.map((el) => el.display_name);
        setResult(place);
      } catch (err) {
        console.log("error:", err);
      }
    }
    fetchData();
  }, [inputValue]);

  return result;
}
