import React, { useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../../../contexts/Context";

const usePrayerTimes = () => {
  const { location, prayerTimes, setPrayerTimes } = useContext(LocationContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress?address=${location}`
      );
      const data = await response.json();
      setPrayerTimes(data.data.timings);
    }
    fetchData();
  }, [location]);
  return { prayerTimes };
};

export default usePrayerTimes;
