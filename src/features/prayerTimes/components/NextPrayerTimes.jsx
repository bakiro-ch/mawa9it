import React from "react";
import PrayerBox from "./PrayerBox";
import Calendar from "../../../components/icons/Calendar";
import Location from "../../../components/icons/Location";
import LocationDialog from "../../location/components/LocationDialog";
import { useContext, useState } from "react";
import { LocationContext } from "../../../contexts/Context";
import usePrayerTimes from "../hooks/usePrayerTimes";
import Mosque from "../../../components/icons/Mosque";
import {
  Sunrise,
  Fajr,
  Dhuhr,
  Asr,
  Maghrib,
  Isha,
} from "../../../components/icons/Sun";

const NextPrayerTimes = () => {
  const now = new Date();

  const miladi = new Intl.DateTimeFormat("en-GB", {
    weekday: "long", // Tuesday
    day: "numeric", // 26
    month: "long", // August
    year: "numeric", // 2025
  }).format(now);

  const hijri = new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
    day: "numeric", // اليوم من الشهر (مثلاً: 26)
    month: "long", // اسم الشهر (مثلاً: August)
    year: "numeric", // السنة الهجرية (مثلاً: 1446)
  }).format(now);

  const { location } = useContext(LocationContext);
  const { prayerTimes } = usePrayerTimes();
  const [dialog, setDialog] = useState(false);

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
    <div className="flex flex-col items-center relative gap-10 lg:gap-10">
      <div className="flex gap-x-1 font-Lexend font-bold text-2xl lg:text-4xl text-primary mt-8">
        <div className="lg:w-10 w-7 lg:h-10 h-7 text-secondary">
          <Mosque />
        </div>
        Today's Prayer Times
      </div>
      <div className="flex lg:flex-row gap-y-8 flex-col lg:justify-center lg:items-center lg:gap-x-100">
        <div className="flex justify-center items-center gap-1 font-light font-Lexend">
          <div className=" w-5 h-5 text-secondary">
            <Calendar />
          </div>
          <div>
            <p>{miladi}</p>
            <p>{hijri}</p>
          </div>
        </div>
        <div onClick={() => setDialog(true)} className="flex cursor-pointer">
          <div className="text-secondary">
            <Location />
          </div>
          <div className="font-Lexend font-extralight">
            <p>{location}</p>
          </div>
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
