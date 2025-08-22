import Location from "../../../components/icons/Location";
import Mosque from "../../../components/icons/Mosque";
import LocationDialog from "../../location/components/LocationDialog";
import { LocationContext } from "../../../contexts/Context";
import { useNextPrayerTimeByAddress } from "../hooks/useNextPrayerTimeByAddress";

import { useState, useContext } from "react";

const NextPrayer = () => {
  const [dialog, setDialog] = useState(false);

  const { location, setLocation } = useContext(LocationContext);
  const [nextPrayerName, setNextPrayerName] = useState(null);
  const [nextPrayerTime, setNextPrayerTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  useNextPrayerTimeByAddress(
    nextPrayerName,
    nextPrayerTime,
    remainingTime,
    setNextPrayerName,
    setNextPrayerTime,
    setRemainingTime
  );
  console.log(remainingTime, "nextPrayer");
  // useEffect(() => localStorage.setItem("location", location), [location]);

  return (
    <div className="h-full gap-6 flex flex-col justify-center items-center">
      <div className="flex justify-center gap-1">
        <div className="lg:w-10 w-7 lg:h-10 h-7 text-secondary">
          <Mosque />
        </div>
        <p className="text-primary font-Lexend text-2xl lg:text-4xl font-bold ">
          The Next Prayer
        </p>
      </div>
      <div
        className="cursor-pointer flex justify-center gap-1"
        onClick={() => setDialog(true)}
      >
        <div className="text-secondary">
          <Location />
        </div>
        <p className="text-md font-Lexend font-extralight">{location}</p>
      </div>
      {dialog ? (
        <LocationDialog
          setDialog={setDialog}
          //   location={location}
          setLocation={setLocation}
        />
      ) : (
        <></>
      )}

      <div className="flex flex-col justify-center items-center gap-5 w-80 h-50 lg:w-110 lg:h-60 rounded-md bg-background shadow-xl">
        <p className="font-Lexend lg:text-3xl text-2xl font-semibold">
          {nextPrayerName}
        </p>
        <p className="text-primary animate-pulse font-bold text-4xl lg:text-5xl">
          {remainingTime}
        </p>
        <p className="font-Lexend lg:text-2xl font-bold text-lg">
          {nextPrayerTime}
        </p>
      </div>
    </div>
  );
};

export default NextPrayer;
