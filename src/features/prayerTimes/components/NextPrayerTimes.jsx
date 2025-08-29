import PrayerBox from "./PrayerBox";
import Location from "../../../components/icons/Location";
import LocationDialog from "../../location/components/LocationDialog";
import { useContext, useState } from "react";
import { LocationContext } from "../../../contexts/Context";
import usePrayerTimes from "../hooks/usePrayerTimes";
import Mosque from "../../../components/icons/Mosque";
import { MyDatePicker } from "../../../components/DatePicker";
import {
  Sunrise,
  Fajr,
  Dhuhr,
  Asr,
  Maghrib,
  Isha,
} from "../../../components/icons/Sun";

const NextPrayerTimes = () => {
  const [selected, setSelected] = useState(new Date());
  const { location } = useContext(LocationContext);
  const [dialog, setDialog] = useState(false);

  const [prayerTimes, setPrayerTimes] = useState(
    JSON.parse(localStorage.getItem("prayerTimes")) || ""
  );
  const [dateChanged, setDateChanged] = useState(false);
  usePrayerTimes(
    selected,
    prayerTimes,
    setPrayerTimes,
    dateChanged,
    setDateChanged
  );

  const prayerBox = () => {
    const array = [
      {
        Fajr: <Fajr />,
      },
      {
        Sunrise: <Sunrise />,
      },
      {
        Dhuhr: <Dhuhr />,
      },
      {
        Asr: <Asr />,
      },
      {
        Maghrib: <Maghrib />,
      },
      {
        Isha: <Isha />,
      },
    ];
    return array.map((el) => {
      // console.log(el, prayerTimes[el]);
      const salat = Object.keys(el)[0];
      return (
        <PrayerBox
          key={salat}
          PrayerName={salat}
          PrayerTime={prayerTimes[salat]}
        >
          {el[salat]}
        </PrayerBox>
      );
    });
  };

  return (
    <div className="flex delay-500 transition-all duration-500 flex-col items-center relative gap-10 lg:gap-10">
      <div className="flex gap-x-1 font-Lexend font-bold text-2xl lg:text-4xl text-primary mt-12 lg:mt-8">
        <div className="lg:w-10 w-7 lg:h-10 h-7 text-secondary">
          <Mosque />
        </div>
        Today's Prayer Times
      </div>
      <div className="flex lg:flex-row-reverse gap-y-8 lg:w-9/12 flex-col lg:justify-between lg:items-center ">
        <div
          onClick={() => setDialog(true)}
          className="flex items-center cursor-pointer"
        >
          <div className="text-secondary">
            <Location />
          </div>
          <div className="font-Lexend font-extralight">
            <p className="max-w-60 lg:max-w-110 break-all ">{location}</p>
          </div>
        </div>
        <div>
          <MyDatePicker
            selected={selected}
            setSelected={setSelected}
            setDateChanged={setDateChanged}
          />
        </div>
      </div>{" "}
      <div className="grid lg:grid-cols-3 lg:gap-x-20 gap-y-10 mb-5">
        {prayerBox()}
        {/* <PrayerBox PrayerName="" PrayerTime="" Logo />
        <PrayerBox />
        <PrayerBox />
        <PrayerBox />
        <PrayerBox />
        <PrayerBox /> */}
      </div>
      {dialog ? (
        <LocationDialog
          setDialog={setDialog}
          // //   location={location}
          // setLocation={setLocation}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NextPrayerTimes;
