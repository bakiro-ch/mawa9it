import React from "react";

const PrayerBox = ({ PrayerName, PrayerTime, children }) => {
  const nextPrayerName = localStorage.getItem("nextPrayerName");
  return (
    <div>
      <div
        className={`h-50 w-50 flex flex-col justify-evenly shadow-2xl text-center rounded-2xl ${
          PrayerName === nextPrayerName
            ? "bg-primary  text-white"
            : "bg-transparent"
        }`}
      >
        <div className=" flex text-center justify-center">{children}</div>
        <div
          className={`font-bold text-3xl ${
            PrayerName === nextPrayerName ? "text-secondary" : "text-primary"
          }`}
        >
          {PrayerTime}
        </div>{" "}
        <div className="font-bold text-lg">{PrayerName}</div>
      </div>
    </div>
  );
};

export default PrayerBox;
