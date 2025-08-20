import { useEffect, useState, useContext } from "react";
import { LocationContext } from "../../../contexts/Context";
import { getRemainingTime } from "./getRemainingTime";

export const useNextPrayerTimeByAddress = () => {
  const [nextPrayerName, setNextPrayerName] = useState(null);
  const [nextPrayerTime, setNextPrayerTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  // const [apiAlAdhan, setApiAlAdhan] = useState(false);
  // const [formatted, setFormatted] = useState(null);

  const { location, apiAlAdhan, setApiAlAdhan } = useContext(LocationContext);
  // console.log(locationHelp.current);
  console.log("ana 5atini");

  useEffect(() => {
    async function fetchData() {
      if (apiAlAdhan) {
        try {
          // const lc = location ? location.split(" ") : "algeria";
          const response = await fetch(
            `https://api.aladhan.com/v1/nextPrayerByAddress?&address=${location.split(
              " "
            )}`
          );
          const data = await response.json();

          const nextPrayer = Object.keys(data.data.timings)[0];
          const prayerTime = data.data.timings[nextPrayer];

          setNextPrayerName(nextPrayer);
          setNextPrayerTime(prayerTime);
          // setRemainingTime("00:00:00");
          console.log(remainingTime, nextPrayerName, nextPrayerTime);

          console.log("api.aladhan.com");

          // console.log(
          //   nextPrayer,
          //   nextPrayerTime,
          //   prayerTime,
          //   nextPrayerName,
          //   remainingTime
          // );
        } catch (err) {
          console.log("Error: ", err);
        }
        setApiAlAdhan(false);
      }
      // console.log(nextPrayerTime, nextPrayerName, remainingTime);
    }
    fetchData();
  }, [apiAlAdhan]);

  //
  useEffect(() => {
    if (!nextPrayerTime) return;

    const interval = setInterval(() => {
      const formatted = getRemainingTime(`${nextPrayerTime}`).formatted;
      setRemainingTime(formatted);
      if (formatted === "00:00:00") {
        // إصلاح syntax خطأ setTimeout
        setTimeout(() => {
          setApiAlAdhan(true);
          setRemainingTime("00:00:00");
        }, 1000);
      }
      // console.log(remainingTime, formatted);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextPrayerTime]);

  return { nextPrayerName, nextPrayerTime, remainingTime };
};
// import { useEffect, useState, useContext } from "react";
// import { LocationContext } from "../../../../contexts/Context";
// import { getRemainingTime } from "./getRemainingTime";

// export const useNextPrayerTimeByAddress = () => {
//   const [nextPrayerName, setNextPrayerName] = useState(null);
//   const [nextPrayerTime, setNextPrayerTime] = useState(null);
//   const [remainingTime, setRemainingTime] = useState(null);
//   // const [formatted, setFormatted] = useState(null);

//   const { location } = useContext(LocationContext);

//   useEffect(() => {
//     // if (remainingTime != "0:0:0") return;
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `https://api.aladhan.com/v1/nextPrayerByAddress?&address=${location}`
//         );
//         const data = await response.json();

//         const nextPrayer = Object.keys(data.data.timings)[0];
//         const prayerTime = data.data.timings[nextPrayer];

//         setNextPrayerName(nextPrayer);
//         setNextPrayerTime(prayerTime);

//         console.log(nextPrayer, nextPrayerTime, prayerTime, nextPrayerName);
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     }
//     if (location) fetchData();
//   }, [location]);

//   //
//   useEffect(() => {
//     if (!nextPrayerTime) return;

//     const interval = setInterval(() => {
//       const formatted = getRemainingTime(`${nextPrayerTime}`).formatted;
//       setRemainingTime(formatted);
//       console.log(remainingTime, formatted);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [nextPrayerTime]);

//   return { nextPrayerName, nextPrayerTime, remainingTime };
// };
