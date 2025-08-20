import { useEffect, useState, useContext } from "react";
import { getRemainingTime } from "./getRemainingTime";
import { LocationContext } from "../../../contexts/Context";

export const useRemainingTime = (nextPrayerTime) => {
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  const { setApiAlAdhan } = useContext(LocationContext);

  useEffect(() => {
    if (!nextPrayerTime) return;

    const interval = setInterval(() => {
      const formatted = getRemainingTime(`${nextPrayerTime}`).formatted;
      setRemainingTime(formatted);
      if (formatted === "00:00:00") {
        // إصلاح syntax خطأ setTimeout
        setTimeout(() => {
          setApiAlAdhan(true);
        }, 1000);
      }
      // console.log(remainingTime, formatted);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextPrayerTime]);
  return remainingTime;
};
