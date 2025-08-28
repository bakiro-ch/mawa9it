import React, { useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../../../contexts/Context";

const usePrayerTimes = (selected) => {
  const { location, prayerTimes, setPrayerTimes } = useContext(LocationContext);
  console.log("out");
  useEffect(() => {
    console.log("on");
    async function fetchData() {
      console.log(selected.toLocaleDateString().replaceAll("/", "-"));
      let parts = selected.toLocaleDateString().replaceAll("/", "-").split("-");
      parts.pop();
      parts = parts.join("-");
      // let reversedParts = parts.reverse();
      // reversedParts = reversedParts.join("-");
      console.log(parts);
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress/2025-${parts}?address=${location}`
      );
      const data = await response.json();
      setPrayerTimes(data.data.timings);
      console.log(data.data.timings);
    }
    fetchData();
  }, [location, selected]);
  return { prayerTimes };
};

export default usePrayerTimes;
