import "./App.css";
import Home from "./pages/Home";
import { LocationContext } from "./contexts/Context";
import { useEffect, useState } from "react";
import { useSetIpApi } from "./features/location/hooks/useSetIpApi";
import { Routes, Route } from "react-router-dom";
import PrayerTimes from "./pages/PrayerTimes";
import Navbar from "./layout/Navbar";
import Qibla from "./pages/Qibla";
import Calendar from "./pages/Calendar";

function App() {
  // const [region, setRegion] = useState("Al-Riyadh, Saudi Arabia");
  // setRegion(city);

  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location") || "Al-Riyadh, Saudi Arabia";
  });
  const [apiAlAdhan, setApiAlAdhan] = useState(false);
  console.log("App");
  useSetIpApi({ location, setLocation, setApiAlAdhan, apiAlAdhan });
  // const [prayerTimes, setPrayerTimes] = useState(
  //   localStorage.getItem("prayerTimes") || ""
  // );
  // const [remainingTime, setRemainingTime] = useState("00:00:00");

  useEffect(() => localStorage.setItem("location", location), [location]);

  return (
    <>
      {" "}
      <LocationContext.Provider
        value={{
          location,
          setLocation,
          apiAlAdhan,
          setApiAlAdhan,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prayerTimes" element={<PrayerTimes />} />
          <Route path="/qibla" element={<Qibla />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </LocationContext.Provider>
    </>
  );
}

export default App;

// import "./App.css";
// import Home from "./pages/home";
// import { LocationContext } from "../contexts/Context";
// import { useEffect, useState } from "react";
// import { useSetIpApi } from "./features/location/hooks/useSetIpApi";

// function App() {
//   const [region, setRegion] = useState("Al-Riyadh, Saudi Arabia");
//   useSetIpApi({ region, setRegion });
//   // setRegion(city);

//   const [location, setLocation] = useState(() => {
//     return localStorage.getItem("location") || region;
//   });
//   const [apiAlAdhan, setApiAlAdhan] = useState(true);
//   useEffect(() => localStorage.setItem("location", location), [location]);

//   return (
//     <LocationContext.Provider
//       value={{ location, setLocation, apiAlAdhan, setApiAlAdhan }}
//     >
//       <Home />
//     </LocationContext.Provider>
//   );
// }

// export default App;
