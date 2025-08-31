import React, { useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../../../contexts/Context";

const usePrayerTimes = (
  selected,
  prayerTimes,
  setPrayerTimes,
  dateChanged,
  setDateChanged
) => {
  const { location } = useContext(LocationContext);
  console.log("out");
  useEffect(() => {
    async function fetchData() {
      console.log("on");
      if (!dateChanged && prayerTimes !== "") return;
      console.log(selected.toLocaleDateString().replaceAll("/", "-"));
      let parts = selected.toLocaleDateString().replaceAll("/", "-").split("-");
      parts.pop();
      parts = parts.join("-");
      console.log(parts);
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress/2025-${parts}?address=${location}`
      );
      const data = await response.json();
      setPrayerTimes(data.data.timings);
      console.log(data.data.timings);
      const prayerT = {
        Fajr: data.data.timings.Fajr,
        Sunrise: data.data.timings.Sunrise,
        Dhuhr: data.data.timings.Dhuhr,
        Asr: data.data.timings.Asr,
        Maghrib: data.data.timings.Maghrib,
        Isha: data.data.timings.Isha,
      };
      // console.log(prayerT);
      localStorage.setItem("prayerTimes", JSON.stringify(prayerT));
      setDateChanged(false);
      // const prt = localStorage.getItem("prayerTimes");
      // console.log(JSON.parse(prt), "++++++");
    }
    fetchData();
  }, [location, selected]);
  return;
};

export default usePrayerTimes;
